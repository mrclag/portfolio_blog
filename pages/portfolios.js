import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { getPortfolios, deletePortfolio } from '../actions/index';
import { Router } from '../routes';
import PortfolioCard from '../components/portfolios/PortfolioCard';

import { Col, Row, Button } from 'reactstrap';

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
        <Col md="4" key={i}>
          <PortfolioCard portfolio={portfolio}>
            {isAuthenticated && isSiteOwner && (
              <React.Fragment>
                <Button
                  onClick={e => this.navigateToEdit(portfolio._id, e)}
                  color="warning"
                >
                  Edit
                </Button>{' '}
                <Button
                  onClick={e => this.displayDeleteWarning(portfolio._id, e)}
                  color="danger"
                >
                  Delete
                </Button>
              </React.Fragment>
            )}
          </PortfolioCard>
        </Col>
      );
    });
  }
  render() {
    const { portfolios } = this.props; // this can be turned into staet with hooks
    const { isAuthenticated, isSiteOwner } = this.props.auth;
    return (
      <BaseLayout {...this.props.auth} title="Matthew Clagett - Projects">
        <BasePage title="Projects" className="portfolio-page">
          {isAuthenticated && isSiteOwner && (
            <Button
              onClick={() => Router.pushRoute('/portfolios/new')}
              color="success"
              className="create-port-btn"
            >
              Add Project
            </Button>
          )}
          <Row>{this.renderPortfolios(portfolios)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
