import React from 'react';
import styled from 'styled-components';
import testImg from '../../../assets/images/post-test-img.jpg';

export default function PostBoardB() {
  return (
    <PostBoardBWrapp>
      <div>
        <img src={testImg} alt="" />
      </div>
      <div>
        <img src={testImg} alt="" />
      </div>
      <div>
        <img src={testImg} alt="" />
      </div>
      <div>
        <img src={testImg} alt="" />
      </div>
    </PostBoardBWrapp>
  );
}

const PostBoardBWrapp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  img {
    width: 100%;
  }
`;
