import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import SocialIcon from '../components/SocialIcon';
import {
  Background,
  Overlay,
  MainSection,
  BackgroundImage,
  ProfileImage,
  Bio,
  NameTitle
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
          <BackgroundImage src="/static/images/background3.png" />
          <MainSection>
            <Bio>
              <NameTitle>MATTHEW CLAGETT</NameTitle>
              <br />
              Self-taught software developer, and May 2019 UC Berkeley Business
              Administration graduate.
              <br />
              <br />
              Currently specialize in React web development, but love learning
              and building new things with new tools. Looking for a position
              starting in Spring 2020.
            </Bio>
            <SocialIcon />
          </MainSection>
        </BaseLayout>
      </Background>
    </>
  );
};

export default Index;
