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
} from '../styles/index.styles';

const Index = props => {
  return (
    <>
      <Background>
        <BaseLayout
          {...props.auth}
          headerType="index"
          title="Matthew Clagett - Portfolio"
        >
          <Overlay />
          <BackgroundImage src="/static/images/background3.png" />
          <MainSection>
            <ProfileImage src="/static/images/icecream.png" />
            <Bio>
              <Typed
                typeSpeed={10}
                backSpeed={20}
                strings={[
                  '<h1><strong>Matthew Clagett</strong></h1><br/>^500Self-taught software developer, and May 2019 UC Berkeley Business Administration graduate.^500<br/><br/>Currently specialize in React web development, but love learning and building new things with new tools. Looking for a position starting in Spring 2020.'
                ]}
                backDelay={1000}
                loopCount={0}
                showCursor={false}
                cursorChar="|"
              />
            </Bio>
          </MainSection>
        </BaseLayout>
      </Background>
    </>
  );
};

export default Index;
