import React, { useState } from 'react';
import {
  Card,
  ModalImage,
  ModalTitle,
  ModalDescription,
  ModalButtons
} from '../../styles/portfolios.styles';
import ButtonLink from '../ButtonLink';

import Modal from './Modal';

const PortfolioCard = props => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, toggleModal] = useState(false);
  const { portfolio, children } = props;

  const toggle = () => setOpen(!open);

  return (
    <>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalImage src={portfolio.imageUrl} alt="modal-image" />
        <ModalDescription>
          <ModalTitle>{portfolio.title}</ModalTitle>
          <hr />
          {portfolio.description}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px'
            }}
          >
            <ModalButtons>
              <ButtonLink link={portfolio.githubUrl} icon="github" />
              <ButtonLink link="https://github.com/mrclag" icon="home" />
            </ModalButtons>
            <i
              class="fa fa-times fa-2x"
              aria-hidden="true"
              style={{ cursor: 'pointer', paddingTop: '25px' }}
              onClick={() => toggleModal(false)}
            ></i>
          </div>
        </ModalDescription>
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
