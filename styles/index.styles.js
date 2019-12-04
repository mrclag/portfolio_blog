import styled from 'styled-components';

export const Background = styled.div`
  /* background: linear-gradient(45deg, #303a85 0%, #264169 50%); */
  background: linear-gradient(45deg, #5160d1 0%, #375c93 50%);
  background-size: cover;
  position: relative;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

export const MainSection = styled.div`
  width: 80vw;
  padding-top: 25vh;
  position: relative;
  margin: auto;
  display: flex;
  @media only screen and (max-width: 991px) {
    padding-top: 12vh;
  }
`;

export const BackgroundImage = styled.img`
  opacity: 0.1;
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0px;
  left: 0;
}
`;

export const ProfileImage = styled.img`
  border-radius: 1200px;
  box-shadow: 2px 2px 2px rgba(3, 22, 44, 0.4);
  width: 25%;
  max-width: 450px;
  height: auto;
  margin: auto;
  bottom: 40px;
  z-index: 2;
  @media (max-width: 991px) {
    width: 80%;
  }
`;

export const Bio = styled.div`
  width: 50vw;
  margin-top: 5vh;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 16px;
  @media only screen and (max-width: 991px) {
    width: 90vw;

    margin-top: 15px;
  }
`;
