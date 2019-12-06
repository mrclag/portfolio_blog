import React, { useState } from 'react';
import PortfolioCardDetail from './PortfolioCardDetail';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';
import ButtonLink from '../ButtonLink';

import Modal from './modal';

const PortfolioCard = props => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, toggleModal] = useState(false);
  const { portfolio, children } = props;

  const toggle = () => setOpen(!open);

  return (
    <>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <img src={portfolio.imageUrl} style={{ width: '100%' }} alt="" />
        <h1 style={{ margin: '10px 0px' }}>
          <b>{portfolio.title}</b>
        </h1>
        <p>
          <b>Description: </b>
          {portfolio.description}
        </p>
        <ButtonLink link={portfolio.githubUrl} icon="github" />
        <ButtonLink link="https://github.com/mrclag" icon="home" />
        <button onClick={() => toggleModal(false)}>Close</button>
      </Modal>
      <span onClick={() => toggleModal(!isModalOpen)}>
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
    </>
  );
};

export default PortfolioCard;
