import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

const About = props => {
  return (
    <BaseLayout {...props.auth} title="Matthew Clagett - About">
      <BasePage className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className="title fadein">Hello, Welcome</h1>
              <h4 className="subtitle fadein">A bit about myself...</h4>
            </div>
          </Col>
          <Col md="6">
            <div className="fadein about-text">
              <p>
                My name is Matthew Clagett, and I am a self-taught software
                developer.{' '}
              </p>
              <p>
                I recently graduated with a Bachelors Degree in Business
                Administration from the University of California Berkeley, Haas
                School of Business. I had very broad studies, but I most enjoyed
                coursework in strategy, data analytics, and design.
              </p>
              <p>
                Coursework and internships using Python and R introduced me to
                writing code daily. Yet, I yearned for a more creative creative
                outlet than solely doing data analysis. So after graduation, I
                chose to further learn software development, and found a way to
                bring together the fields I love, with the power to create
                meaningful products.
              </p>
              <p>
                Currently, I am creating full-stack web development projects,
                using tools including React.js, Node.js, and Python. However, I
                am curious and quick to learn, so I feel confident to join a
                team using an unfamiliar language.
              </p>
              <p>
                I am looking for a role as a Software Engineer starting in
                Spring 2020. Be sure to check out my portfolio, resume, and blog
                page to learn more about me, and please contact me if you are
                interested in working together.
              </p>
              {/* Add contact button */}
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
