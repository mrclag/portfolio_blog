import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import {
  Background,
  Overlay,
  MainSection,
  BackgroundImage,
  ProfileImage,
  Bio
} from './styles/index.styles';

const Index = props => {
  return (
    <>
      <BaseLayout
        {...props.auth}
        headerType="index"
        title="Matthew Clagett - Portfolio"
      >
        <Background />
        <Overlay />
        <BackgroundImage src="/static/images/background3.png" />
        <MainSection>
          <Row>
            <ProfileImage src="/static/images/icecream.png" />
            <Bio>
              <Typed
                typeSpeed={15}
                backSpeed={20}
                strings={[
                  "<h1><strong>Hi, I'm Matt.</strong></h1><br/>^500I am a self-taught software developer, and just graduated UC Berkeley with a degree in Business Administration.^500<br/><br/> Currently creating web development projects, primarily using React, Express, Node, and Python. Looking for a position starting in Spring 2020.^500<br/><br/>Be sure to check out my projects page!"
                ]}
                backDelay={1000}
                loopCount={0}
                showCursor={false}
                cursorChar="|"
              />
            </Bio>
          </Row>
        </MainSection>
      </BaseLayout>
    </>
  );
};

export default Index;
