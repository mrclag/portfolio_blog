import React, { useState } from 'react';
import PortfolioCardDetail from './PortfolioCardDetail';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';
import ButtonLink from '../ButtonLink';

const PortfolioCard = props => {
  const [open, setOpen] = useState(false);
  const { portfolio, children } = props;

  const toggle = () => setOpen(!open);

  return (
    <span onClick={toggle}>
      <PortfolioCardDetail
        toggle={toggle}
        portfolio={portfolio}
        isOpen={open}
      />
      <Card className="portfolio-card">
        <CardImg
          style={{
            width: '100%',
            height: '15vw',
            objectFit: 'cover'
          }}
          src={portfolio.imageUrl}
          alt="Card image"
          className="portfolio-card-img"
        />

        <CardBody>
          <CardTitle className="portfolio-card-title">
            {portfolio.title}
          </CardTitle>
          <CardText
            className="portfolio-card-text"
            style={{ minHeight: '5vw' }}
          >
            {portfolio.blurb}{' '}
          </CardText>{' '}
          <div className="readMore">{children}</div>
        </CardBody>
      </Card>
    </span>
  );
};

export default PortfolioCard;
