import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import PorfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';

import { BaseStyles } from '../styles/baseStyles.styles';
import { updatePortfolio, getPortfolioById } from '../actions/index';

class PortfolioEdit extends Component {
  static async getInitialProps({ query }) {
    let portfolio = {};

    try {
      portfolio = await getPortfolioById(query.id);
    } catch (err) {
      console.error(err);
    }

    return { portfolio };
  }

  constructor(props) {
    super();
    this.state = {
      error: undefined
    };
  }
  updatePortfolio = (portfolioData, { setSubmitting }) => {
    setSubmitting(true);
    updatePortfolio(portfolioData)
      .then(portfolio => {
        setSubmitting(false);
        this.setState({ error: undefined });
        Router.pushRoute('/portfolios');
      })
      .catch(err => {
        const error = err.message || 'Server Error!';
        setSubmitting(false);
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;
    const { portfolio } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BaseStyles>
          <PorfolioCreateForm
            initialValues={portfolio}
            error={error}
            onSubmit={this.updatePortfolio}
          />
        </BaseStyles>
      </BaseLayout>
    );
  }
}

export default withAuth(PortfolioEdit, 'siteOwner');
