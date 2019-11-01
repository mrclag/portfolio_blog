import { Fragment } from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = props => {
  const { className, children, isAuthenticated, user } = props;
  const headerType = props.headerType || 'default';

  return (
    <Fragment>
      <Head>
        <title>Matt Clagett</title>
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
