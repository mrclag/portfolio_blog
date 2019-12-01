import styled from 'styled-components';

export const BlogDetailWrapper = styled.div`
  color: black;
  background-color: #ecedee;
  min-height: 100vh;
  border: 1px solid black;

  @media only screen and (min-width: 991px) {
    .editor-wrapper {
      padding: 0 180px;
    }
  }

  p {
    font-size: 18px;
  }

  blockquote {
    border-left: 2px solid #ddd;
    margin-left: 0;
    margin-right: 0px;
    padding-left: 10px;
    color: #aaa;
    font-style: italic;
    display: block;
  }
`;
