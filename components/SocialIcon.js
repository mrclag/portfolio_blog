import React from 'react';
import styled, { keyframes } from 'styled-components';

const SocialIcon = ({ src }) => {
  return (
    <Wrapper>
      <ul>
        <li class="github">
          <a href="https://www.github.com/mrclag">
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </li>
        <li class="instagram">
          <a href="https://www.instagram.com/mrclagett">
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
        </li>
        <li class="instagram">
          <a href="https://www.linkedin.com/in/matthewclagett">
            <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default SocialIcon;

const Wrapper = styled.div`
  width: 50px;

  ul {
    list-style: none;
    li {
      width: 75px;
      height: 75px;
      line-height: 75px;
      margin: 5px 5px;
      text-align: center;
      cursor: pointer;
      border-radius: 50%;
      border: 3px solid #d8e2dc;
      float: left;
      transition: all 0.5s ease;

      .fa {
        color: #d8e2dc;
        margin-top: 20px;
        transition: all 0.5s ease;
      }
      &:hover {
        border: 5px solid #d9a719;
        box-shadow: 0 0 10px #d9a719;
        transition: all 0.5s ease;
      }
      &:hover .fa {
        color: #d9a719;
        text-shadow: 0 0 10px #d9a719;
        transition: all 0.5s ease;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 50px;
    display: flex;
    transform: translateX(-5%);
    ul {
      margin: 30px auto;
    }
  }
`;
