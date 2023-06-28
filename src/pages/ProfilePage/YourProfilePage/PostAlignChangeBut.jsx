import React from 'react';
import styled from 'styled-components';
import albumIconOff from '../../../assets/icons/icon-post-album-off.png';
import listIconOff from '../../../assets/icons/icon-post-list-off.png';
import albumIconOn from '../../../assets/icons/icon-post-album-on.png';
import listIconOn from '../../../assets/icons/icon-post-list-on.png';

export default function PostAlignChangeBut() {
  return (
    <PostAlignChangeButWrapp>
      <button type="button">
        <img src={albumIconOff} alt="" />
      </button>
      <button type="button">
        <img src={listIconOff} alt="" />
      </button>
      <button type="button">
        <img src={albumIconOn} alt="" />
      </button>
      <button type="button">
        <img src={listIconOn} alt="" />
      </button>
    </PostAlignChangeButWrapp>
  );
}

const PostAlignChangeButWrapp = styled.div`
  border-bottom: 1px solid var(--basic-border-color);
  text-align: right;
  padding: 5px;

  button {
    border: none;
  }
`;
