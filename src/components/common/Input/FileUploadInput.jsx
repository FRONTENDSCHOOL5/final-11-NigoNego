import React from 'react';
import buttonImg from '../../../assets/image/BtnImgUpload.svg';
import styled from 'styled-components';
const FileUploadInput = ({
  id,
  ...props
}) => {
  return (
    <>
      <FileUploadLabelStyle htmlFor={id} {...props}></FileUploadLabelStyle>
      <FileUploadInputStyle
        id={id}
        {...props}
      />
    </>
  );
};

const FileUploadLabelStyle = styled.label`
  position: absolute;
  right: ${props => props.right || '0'};
  bottom: ${props => props.bottom || '0'};

  width: 36px;
  height: 36px;

  display: inline-block;

  background-color: var(--basic-yellow);
  border-radius: 50%;
  background-image: url(${buttonImg});
  background-size: cover;
`;

const FileUploadInputStyle = styled.input`
  display: none;
`;

export default FileUploadInput;
