import styled from 'styled-components';

export const SiteHeading = styled.div`
  text-align: center;
  padding: 150px 0 75px;
  color: white;
  background: teal;

  h1 {
    font-size: 50px;
    margin-top: 0;
    font-weight: 700;
  }

  @media only screen and (min-width: 768px) {
    padding: 100px 0 20px 0;
    min-height: 30vh;
    font-size: 80px;
  }
`;

export const UserBlogList = styled.ul`
  list-style: none;
  padding-left: 0;
  li {
    font-size: 28px;
    color: black;
  }
  a {
    color: #424242;
  }
`;

export const BlogStatusTitle = styled.h2`
  font-weight: bold;
`;

export const BlogPageWrapper = styled.div`
  padding-top: 50px;
  color: black;
  background-color: #ecedee;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const BlogList = styled.div`
  grid-column: span 6;
  margin: 0 auto;
  text-align: center;
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 10%;
  height: 50px;
  width: 100px;
  font-size: 14px;
  margin: 20px 20px;
`;
