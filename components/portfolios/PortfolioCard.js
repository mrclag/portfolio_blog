import React, { useState } from 'react';
import { Card } from '../../styles/portfolios.styles';
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
        <img
          src={portfolio.imageUrl}
          style={{ width: '100%', height: '25vw', objectFit: 'cover' }}
          alt=""
        />
        <h1 style={{ margin: '10px 0px' }}>
          <b>{portfolio.title}</b>
        </h1>
        <p>
          <b>Description: </b>
          <br />
          {portfolio.description}
        </p>
        <p>
          <b>Tech: </b>
          <br />
          {portfolio.techUsed}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonLink link={portfolio.githubUrl} icon="github" />
          <ButtonLink link="https://github.com/mrclag" icon="home" />
        </div>
        <button onClick={() => toggleModal(false)}>Close</button>
      </Modal>
      <span onClick={() => toggleModal(!isModalOpen)}>
        <Card>
          <img src={portfolio.imageUrl} />
          <div className="card-body">
            <h2>{portfolio.title}</h2>
            <p>{portfolio.blurb}</p>
            {children}
          </div>
        </Card>
      </span>
    </>
  );
};

export default PortfolioCard;
