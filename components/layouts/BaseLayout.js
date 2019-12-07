import { Fragment } from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

import { Cover, Wrapper } from '../styles/BaseLayout.styles';

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    title
  } = props;
  const headerType = props.headerType || 'default';

  return (
    <Fragment>
      <Head>
        <title>{title || 'Matthew Clagett'}</title>
        <meta
          name="description"
          content="My name is Matt, and I am a self-taught software developer and recent UC Berkeley Haas graduate. Come check out my work, and reach out if you would like to work together."
        />
        <meta
          name="keywords"
          content="matthew clagett, matt clagett, clagett blog"
        />
        <meta property="og:title" content="Matthew Clagett" />
        <meta property="og:locale" content="en_US" />
        <meta proprerty="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Matt, and I am a self-taught software developer and recent UC Berkeley Haas graduate. Come check out my work, and reach out if you would like to work together."
        />
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <Header
          isAuthenticated={isAuthenticated}
          isSiteOwner={isSiteOwner}
          user={user}
        />
        <Cover>
          <Wrapper>{children}</Wrapper>
        </Cover>
      </div>
    </Fragment>
  );
};

export default BaseLayout;
