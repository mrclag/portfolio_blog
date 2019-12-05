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
  position: absolute;
  margin: auto;
  display: flex;
  height: 35vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 991px) {
    top: 17vh;
    padding-top: 12vh;
    display: unset;
  }
`;

export const BackgroundImage = styled.img`
  opacity: 0.15;
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: relative;
  top: 150px;
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
    width: 70vw;
    margin: 0 5vw;
  }
`;

export const Bio = styled.div`
  width: 50vw;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 16px;
  @media only screen and (max-width: 991px) {
    width: 80vw;
    margin-top: 15px;
  }
`;
