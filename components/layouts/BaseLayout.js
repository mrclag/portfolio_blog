import { Fragment } from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

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
        <title>{title}</title>
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
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-xVVam1KS4+Qt2OrFa+VdRUoXygyKIuNWUUUBZYv+n27STsJ7oDOHJgfF0bNKLMJF"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          isSiteOwner={isSiteOwner}
          user={user}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </Fragment>
  );
};

export default BaseLayout;
