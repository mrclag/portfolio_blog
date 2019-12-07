import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { getPortfolios, deletePortfolio } from '../actions/index';
import { Router } from '../routes';
import PortfolioCard from '../components/portfolios/PortfolioCard';
import { BaseStyles } from '../styles/baseStyles.styles';
import {
  PortfolioPageWrapper,
  Title,
  ProjectsContainer,
  CardSub
} from '../styles/portfolios.styles';

// turn this into a functional component
class Portfolios extends Component {
  static async getInitialProps() {
    let portfolios = [];
    // static means you can call without initializing new class
    try {
      portfolios = await getPortfolios();
    } catch (e) {
      console.log(e);
    }

    return { portfolios };
  }

  navigateToEdit(portfolioId, e) {
    e.stopPropagation();
    Router.pushRoute(`/portfolios/${portfolioId}/edit`);
  }

  displayDeleteWarning = (portfolioId, e) => {
    e.stopPropagation();
    const isConfirm = confirm(
      'Are you sure you want to delete this portfolio?'
    );
    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  };

  deletePortfolio = portfolioId => {
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute('/portfolios');
      })
      .catch(err => console.error(err));
  };

  renderPortfolios(portfolios) {
    const { isAuthenticated, isSiteOwner } = this.props.auth;

    return portfolios.map((portfolio, i) => {
      return (
        <PortfolioCard portfolio={portfolio} key={i}>
          {isAuthenticated && isSiteOwner && (
            <React.Fragment>
              <button
                onClick={e => this.navigateToEdit(portfolio._id, e)}
                color="warning"
              >
                Edit
              </button>{' '}
              <button
                onClick={e => this.displayDeleteWarning(portfolio._id, e)}
                color="danger"
              >
                Delete
              </button>
            </React.Fragment>
          )}
        </PortfolioCard>
      );
    });
  }
  render() {
    const { portfolios } = this.props; // this can be turned into staet with hooks
    const { isAuthenticated, isSiteOwner } = this.props.auth;
    return (
      <BaseLayout {...this.props.auth} title="Matthew Clagett - Projects">
        <PortfolioPageWrapper>
          <Title>PROJECTS</Title>
          {isAuthenticated && isSiteOwner && (
            <button
              onClick={() => Router.pushRoute('/portfolios/new')}
              color="success"
            >
              Add Project
            </button>
          )}
          <ProjectsContainer>
            <CardSub>{this.renderPortfolios(portfolios)}</CardSub>
          </ProjectsContainer>
        </PortfolioPageWrapper>
      </BaseLayout>
    );
  }
}

export default Portfolios;
