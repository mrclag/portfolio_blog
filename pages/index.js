import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import ButtonLink from '../components/ButtonLink';
import {
  Background,
  Overlay,
  MainSection,
  BackgroundImage,
  ProfileImage,
  Bio,
  NameTitle,
  SocialLinks
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
              and building new things with new tools.
              <br />
              <br />
              Looking for a full-time position starting in Spring 2020.
            </Bio>
            <SocialLinks>
              <ButtonLink link="https://www.github.com/mrclag" icon="github" />
              <ButtonLink
                link="https://www.instagram.com/mrclagett"
                icon="instagram"
              />
              <ButtonLink
                link="https://www.linkedin.com/in/matthewclagett"
                icon="linkedin"
              />
            </SocialLinks>
          </MainSection>
        </BaseLayout>
      </Background>
    </>
  );
};

export default Index;
