import styled from 'styled-components';

export const PostLink = styled.a`
  &:focus,
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: #18bc9c !important;
  }
`;

export const PostTitle = styled.h2`
  font-size: 24px;
  margin-top: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const PostSubtitle = styled.h3`
  font-size: 18px;
  font-weight: 300;
  margin: 0 0 10px;
  color: #565656;
`;

export const PostMeta = styled.p`
  font-size: 16px;
  font-style: italic;
  margin-top: 0;
  color: #868e96;
`;

export const SiteHeading = styled.div`
  text-align: center;
  padding: 150px 0 75px;
  color: white;
  font-size: 50px;
  margin-top: 0;
  font-weight: 700;

  @media only screen and (min-width: 768px) {
    padding: 100px 0 10px 0;
    min-height: 20vh;
    font-size: 80px;
  }
`;
