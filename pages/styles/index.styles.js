import styled from 'styled-components';

export const Background = styled.div`
  background: linear-gradient(45deg, #303a85 0%, #264169 50%);
  /* background: linear-gradient(45deg, #5160d1 0%, #375c93 50%); */
  background-size: cover;
  position: relative;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

export const MainSection = styled.div`
  top: 150px;
  width: 80vw;
  padding-top: 25vh;
  margin: auto;
  display: flex;
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
  box-shadow: 5px 5px 15px rgba(3, 22, 44, 0.6);
  width: 25%;
  margin: auto;
  bottom: 40px;
  z-index: 2;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Bio = styled.div`
  width: 50vw;
  margin-top: 15px;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 17px;
`;
