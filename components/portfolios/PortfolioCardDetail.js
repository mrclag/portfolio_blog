import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import portfolioEdit from '../../pages/portfolioEdit';

const PortfolioCardDetail = props => {
  const { buttonLabel, isOpen, toggle, portfolio } = props;

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{portfolioEdit.title}</ModalHeader>
        <ModalBody>
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
