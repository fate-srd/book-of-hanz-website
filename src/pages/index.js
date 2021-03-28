import * as React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import tw, { styled } from 'twin.macro';
import pattern from '../images/pattern.png';

const HeaderContainer = styled.header`
  ${tw`relative bg-gradient-to-br from-fateBlue to-fateBlue-darker h-screen text-white font-bold text-center`}
`;

const ImageWrapper = styled.div`
  background-image: url(${pattern});
  ${tw`absolute inset-0 p-3 md:p-8`}
`;

const Rule = tw.div`
h-full border-2 border-white border-solid flex flex-col flex-nowrap justify-center z-10 p-3
`;

const TheBookOf = tw.h1`
text-2xl md:text-5xl uppercase font-black uppercase tracking-wide z-50 text-shadow-xl relative mb-5
`;

const Hanz = tw.span`
text-7xl md:text-9xl block font-black tracking-normal
`;

const Subhead = styled.p`
  max-width: 500px;
  ${tw`font-bold text-lg md:text-2xl text-shadow-xl mx-auto`}
`;

const Btn = tw.a`
text-gray-700 rounded inline-block bg-yellow-400 hover:bg-yellow-300 w-max px-6 py-4 mx-auto mt-9 uppercase 
`;

const url =
  'https://amazingrando.us9.list-manage.com/subscribe/post?u=69bf555af18cbc7e4207e4ff8&amp;id=24473d51da';

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div tw="mt-9">
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <p tw="text-lg text-shadow-xl">
        Missed the{' '}
        <a
          target="_blank"
          rel="noreferrer"
          tw="text-yellow-400 hover:text-yellow-300"
          href="https://www.kickstarter.com/projects/amazingrando/the-book-of-hanz-for-the-fate-rpg-zinequest-3"
        >
          Kickstarter
        </a>{' '}
        and want a printed copy of the Book of Hanz? <br />
        Sign up to be notified when the book is available to the public.
      </p>
      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="me@email.com"
        tw="rounded block text-gray-700 mx-auto mt-5 p-5"
      />
      <button
        tw="text-gray-700 font-bold rounded bg-yellow-400 hover:bg-yellow-300 w-max px-6 py-4 mx-auto mt-5 uppercase 
"
        onClick={submit}
        type="button"
      >
        Notify Me
      </button>
    </div>
  );
};

const IndexPage = () => (
  <div className="font-sans">
    <HeaderContainer>
      <ImageWrapper>
        <Rule>
          <TheBookOf>
            The Book of <Hanz>Hanz</Hanz>
          </TheBookOf>
          <Subhead>
            The quintessential guide to running the Fate Roleplaying Game.
          </Subhead>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </Rule>
      </ImageWrapper>
    </HeaderContainer>
  </div>
);

export default IndexPage;
