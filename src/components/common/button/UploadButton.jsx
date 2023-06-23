import React from 'react';
import styled from 'styled-components';
import buttonImg from '../../../assets/images/upload-file.svg';

export default function UploadButton() {
  return (
    <UploadButtonStyle>
      <label htmlFor="input" />
      <input id="input" type="file" />
    </UploadButtonStyle>
  );
}

const UploadButtonStyle = styled.div`
  /* position: fixed;
  bottom: 16px;
  right: 16px; */
  label {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-image: url(${buttonImg});
    background-size: cover;
  }

  input {
    display: none;
  }

  input::file-selector-button {
    display: none;
  }
`;
