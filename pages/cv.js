import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

class Cv extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth} title="Matthew Clagett - Resume">
        <BasePage title="Get my CV">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="cv-title">
                <a
                  download="clagett_cv.pdf"
                  className="btn btn-success"
                  href="/static/clagett_cv.pdf"
                >
                  Download
                </a>
              </div>
              <iframe
                style={{ width: '100%', height: '800px' }}
                src="/static/clagett_cv.pdf"
              ></iframe>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;
