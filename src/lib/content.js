import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.resolve('content');

const monthNamesShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const monthNamesLong = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function slugifyHeading(raw) {
  return raw
    .replace(/ /g, '-')
    .replace(/[?,:()“”"'’*]/g, '')
    .replace(/^-/, '')
    .replace(/&amp;/, '')
    .toLowerCase();
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export function withHeadingIds(html) {
  return html.replace(/<h(\d+)>([^<>]*)<\/h\1>/gi, (_, level, inner) => {
    const id = slugifyHeading(inner);
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });
}

function extractH1(html) {
  return [...html.matchAll(/<h1 id="([^"]*)">([^<>]*)<\/h1>/gi)].map((match) => ({
    id: match[1],
    value: decodeHtml(match[2]),
  }));
}

export function loadBook(language) {
  const file = language === 'spanish' ? 'LibrodeHanz2021.md' : 'BookOfHanz2021.md';
  const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
  const { content } = matter(raw);
  const html = withHeadingIds(marked.parse(content));
  return { html, toc: extractH1(html) };
}

export function displayTitle(filename) {
  const [maybeDate, ...restParts] = filename.split('-');
  let title = filename.replace(/-/g, ' ').replace(/_/g, '’');

  if (/^\d{8}$/.test(maybeDate)) {
    const year = maybeDate.slice(0, 4);
    const month = maybeDate.slice(4, 6);
    const day = maybeDate.slice(6, 8);
    const monthIndex = parseInt(month, 10) - 1;
    const formattedDate = `${monthNamesShort[monthIndex]} ${day}, ${year}`;
    const restTitle = restParts.join('-').replace(/-/g, ' ').replace(/_/g, '’');
    title = restTitle ? `${formattedDate} ${restTitle}` : formattedDate;
  }

  return title;
}

export function formatTimestamps(html) {
  return html.replace(
    /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([-+]\d{4})/g,
    (match, year, month, day, hour, minute, second, offset) => {
      const monthIndex = parseInt(month, 10) - 1;
      const hourNum = parseInt(hour, 10);
      const isPM = hourNum >= 12;
      const hour12 = hourNum % 12 === 0 ? 12 : hourNum % 12;
      const ampm = isPM ? 'PM' : 'AM';
      const formattedDate = `${monthNamesLong[monthIndex]} ${day}, ${year}`;
      const formattedTime = `${hour12}:${minute} ${ampm}`;
      return `${formattedDate} at ${formattedTime} ${offset}`;
    }
  );
}

let apocryphaCache;

function readApocrypha() {
  if (apocryphaCache) return apocryphaCache;

  const root = path.join(contentDir, 'apocrypha');
  const posts = [];

  for (const category of fs.readdirSync(root)) {
    const dir = path.join(root, category);
    if (!fs.statSync(dir).isDirectory()) continue;

    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md')) continue;
      const filename = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      posts.push({
        category,
        slug: filename,
        title: displayTitle(filename),
        html: formatTimestamps(raw),
      });
    }
  }

  posts.sort((a, b) => a.slug.localeCompare(b.slug));
  apocryphaCache = posts;
  return posts;
}

export function getApocryphaList() {
  return readApocrypha().map(({ slug, title, category }) => ({
    slug,
    title,
    category,
  }));
}

export function getApocryphaPost(slug) {
  return readApocrypha().find((post) => post.slug === slug);
}
