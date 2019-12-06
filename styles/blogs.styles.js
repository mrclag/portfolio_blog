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

export const Title = styled.h1`
  text-align: center;
  color: black;
  margin: 5vh 5vw;
  font-weight: 700;
`;

export const BlogPageWrapper = styled.div`
  color: black;
  padding-top: 10vh;
  background-color: #ecedee;
  min-height: 100vh;
`;

export const BlogPostWrapper = styled.div`
  box-shadow: 1px 1px 1px rgba(3, 22, 44, 0.3);
  width: 50vw;
  margin: 10px auto;
  background: white;

  @media screen and (max-width: 800px) {
    padding: 10px 40px;
    width: 90vw;
    img {
      display: none;
    }
  }
`;
