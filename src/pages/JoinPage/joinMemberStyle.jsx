import styled from 'styled-components';
import buttonImg from '../../assets/images/upload-file.svg';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 50px;
`;
const HeadingWrapper = styled.div`
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin-top: 1.875rem;
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div`
  margin-top: 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const BtnWrapper = styled.div`
  margin-top: 10px;
`;

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

export {
  Wrapper,
  HeadingWrapper,
  FormWrapper,
  ImageWrapper,
  BtnWrapper,
  UploadButtonStyle,
};
