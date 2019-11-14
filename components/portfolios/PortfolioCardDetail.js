import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import portfolioEdit from '../../pages/portfolioEdit';
import CarouselModal from './CarouselModal';

const PortfolioCardDetail = props => {
  const { isOpen, toggle, portfolio } = props;
  const images = [portfolio.imageUrl, portfolio.imageUrl2, portfolio.imageUrl3];

  console.log('CARD DETAIL:', images);
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{portfolioEdit.title}</ModalHeader>
        <ModalBody>
          <CarouselModal images={images} />
          <p>
            <b>{portfolio.title}</b>
          </p>
          <p>{portfolio.description}</p>
          <p>Tech used: {portfolio.techUsed}</p>
          <p>
            <Button
              className="btn btn-primary"
              href={portfolio.githubUrl}
              target="_blank"
            >
              Github Link
            </Button>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PortfolioCardDetail;
