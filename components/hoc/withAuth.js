import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

export default function(Comp) {
  return class withAuth extends Component {
    static async getInitialProps(args) {
      const pageProps =
        (await Comp.getInitialProps) && (await Comp.getInitialProps(args));
      return { ...pageProps };
    }

    renderProtectedPage() {
      const { isAuthenticated } = this.props.auth;
      if (isAuthenticated) {
        return <Comp {...this.props} />;
      } else {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <h1>You are not authenticated. Please Log In</h1>
            </BasePage>
          </BaseLayout>
        );
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  };
}
