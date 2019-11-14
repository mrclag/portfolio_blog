import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';

const Index = props => {
  return (
    <BaseLayout
      className="cover"
      {...props.auth}
      headerType="index"
      title="Matthew Clagett - Portfolio"
    >
      <div className="main-section">
        <div className="background-image">
          <img src="/static/images/background3.png" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <img className="image" src="/static/images/icecream.jpg" />
                <div className="shadow-custom">
                  <div className="shadow-inner"> </div>
                </div>
              </div>
            </Col>
            <Col
              style={{ padding: '30px' }}
              md="6"
              className="hero-welcome-wrapper"
            >
              <div className="hero-welcome-bio">
                <Typed
                  style={{ fontSize: '20px' }}
                  typeSpeed={15}
                  backSpeed={20}
                  strings={[
                    "<h1><strong>Hi, I'm Matt.</strong></h1><br/>^500I am a self-taught software developer, and just graduated UC Berkeley with a degree in Business Administration.^500<br/><br/> Be sure to check out my projects page!"
                  ]}
                  backDelay={1000}
                  loopCount={0}
                  showCursor={false}
                  cursorChar="|"
                  className="self-typed"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default Index;
