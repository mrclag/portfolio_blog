import styled from 'styled-components';

export const PortfolioPageWrapper = styled.div`
  min-height: 150vh;
  padding: 10vh 5vw;
  background: #ecedee;
  background-size: cover;
  margin: auto;
  @media screen and (max-width: 800px) {
    padding: 10vh 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 5vh 5vw;
  font-weight: 700;
`;

export const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: 4rem 4rem auto auto;
  grid-gap: 1em;
`;

export const Card = styled.div`
  width: 350px;
  height: 400px;
  display: grid;
  margin: 10px;
  background: #fff;
  border-radius: 0.6em;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
  }

  h2 {
    color: #222;
    margin-top: -0.2em;
    line-height: 1.4;
    font-size: 1.3em;
    transition: all ease-in 100ms;
  }

  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;

export const CardSub = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
