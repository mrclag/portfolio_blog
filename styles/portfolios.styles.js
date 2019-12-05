import styled from 'styled-components';

export const PortfolioPageWrapper = styled.div`
  min-height: 100vh;
  padding: 10vh 5vw;
  background: #ecedee;
  margin: auto;

  .portfolio-card {
    background: linear-gradient(45deg, #5160d1 0%, #375c93 50%);
    border: none;
    color: white;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    margin-bottom: 20px;
    min-height: 350px;

    &:hover {
      cursor: pointer;
      transform: translateY(-5px);
    }

    &:hover .readMore:before {
      background: linear-gradient(to right, #ffffff 0%, #ffffff 100%);
    }

    &-img {
      min-height: 150px;
    }

    &-title {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.1;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    &-text {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.3;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 5vh 5vw;
  font-weight: 700;
`;
