import React, { Component } from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Button, Row, Col } from 'reactstrap';

class Index extends Component {
  constructor(props) {
    super(props);

    this.roles = [
      "Hi, I'm Matt. I am a self-taught software developer, and just graduated in May from UC Berkeley with a degree in Business Administration. Be sure to check out my projects page!"
    ];
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <BaseLayout
        className="cover"
        {...this.props.auth}
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
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> </h2>
                        <div className="hero-section-content-intro">""</div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/icecream.jpg"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-bio">
                  <Typed
                    typeSpeed={20}
                    backSpeed={20}
                    strings={this.roles}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
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
  }
}

export default Index;
