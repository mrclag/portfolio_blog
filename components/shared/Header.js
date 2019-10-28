import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import { Link as NextLink } from '../../routes';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolio</a>
        </Link>
        <Link href="/blogs">
          <a>Blog</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <NextLink route="test" params={{ id: '2' }}>
          Test 2
        </NextLink>
        <NextLink route="/test/5">Test 5</NextLink>
      </Fragment>
    );
  }
}

export default Header;
