import React, { useState } from 'react';
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

const PortfolioNew = props => {
  const [error, setError] = useState(undefined);

  const savePortfolio = (portfolioData, { setSubmitting }) => {
    setSubmitting(true);
    createPortfolio(portfolioData)
      .then(() => {
        setSubmitting(false);
        setError(undefined);
        Router.pushRoute('/portfolios');
      })
      .catch(err => {
        const errorMessage = err.message || 'Server Error!';
        setSubmitting(false);
        setError(errorMessage);
      });
  };

  return (
    <BaseLayout {...props.auth}>
      <BasePage className="portfolio-create-page" title="Add Project">
        <Row>
          <Col md="6">
            <PorfolioCreateForm
              initialValues={INITIAL_VALUES}
              error={error}
              onSubmit={savePortfolio}
            />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew, 'siteOwner');
