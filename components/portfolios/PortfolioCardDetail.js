import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CarouselModal from './CarouselModal';

const PortfolioCardDetail = props => {
  const { isOpen, toggle, portfolio } = props;
  const images = [portfolio.imageUrl, portfolio.imageUrl2, portfolio.imageUrl3];

  return (
    <div>
      <Modal size="lg" isOpen={isOpen} toggle={toggle}>
        <ModalBody>
          <CarouselModal images={images} />
          <h1 style={{ margin: '10px 0px' }}>
            <b>{portfolio.title}</b>
          </h1>
          <p>
            <b>Description: </b>
            {portfolio.description}
          </p>
          <p>
            <b>Tech used: </b> {portfolio.techUsed}
          </p>
          <p>
            <Button
              size="lg"
              color="primary"
              className="btn"
              href={portfolio.githubUrl}
              target="_blank"
            >
              View Github
            </Button>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" style={{ margin: 'auto' }} onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PortfolioCardDetail;
