import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PorfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import withAuth from '../components/hoc/withAuth';
import { Row, Col } from 'reactstrap';
import { Router } from '../routes';

import { createPortfolio } from '../actions/index';

const INITIAL_VALUES = {
  title: '',
  blurb: '',
  githubLink: '',
  techUsed: '',
  description: '',
  imageUrl: '',
  imageUrl2: '',
  imageUrl3: ''
};

class PortfolioNew extends Component {
  constructor(props) {
    super();
    this.savePortfolio = this.savePortfolio.bind(this);
    this.state = {
      error: undefined
    };
  }
  savePortfolio = (portfolioData, { setSubmitting }) => {
    setSubmitting(true);
    createPortfolio(portfolioData)
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
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title="Add Project">
          <Row>
            <Col md="6">
              <PorfolioCreateForm
                initialValues={INITIAL_VALUES}
                error={error}
                onSubmit={this.savePortfolio}
              />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(PortfolioNew, 'siteOwner');
