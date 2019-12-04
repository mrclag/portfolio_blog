import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { BaseStyles } from '../styles/baseStyles.styles';

import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push('/');
  }

  render() {
    return (
      <BaseLayout>
        <BaseStyles>
          <h1>Verifying login data...</h1>
        </BaseStyles>
      </BaseLayout>
    );
  }
}

export default withRouter(Callback);
