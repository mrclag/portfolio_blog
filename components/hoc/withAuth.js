import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

const namespace = 'http://localhost:3000/';

export default function(Comp, role) {
  return class withAuth extends Component {
    static async getInitialProps(args) {
      const pageProps =
        (await Comp.getInitialProps) && (await Comp.getInitialProps(args));
      return { ...pageProps };
    }

    renderProtectedPage() {
      const { isAuthenticated, user } = this.props.auth;
      const userRole = user && user[`${namespace}role`];
      let isAuthorized = false;

      if (role) {
        if (userRole && userRole === role) {
          isAuthorized = true;
        }
      } else {
        isAuthorized = true;
      }

      if (!isAuthenticated) {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <h1>You are not authenticated. Please Log In</h1>
            </BasePage>
          </BaseLayout>
        );
      } else if (!isAuthorized) {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <h1>
                You are not authorized. You don't have permission to visit this
                page
              </h1>
            </BasePage>
          </BaseLayout>
        );
      } else {
        return <Comp {...this.props} />;
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  };
}