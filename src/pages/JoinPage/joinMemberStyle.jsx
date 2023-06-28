import styled from 'styled-components';
import buttonImg from '../../assets/images/upload-file.svg';

const Wrapper = styled.div`
  flex-direction: column;
`;
const HeadingWrapper = styled.div`
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin-top: 1.875rem;
  width: 112px;
  margin: auto;
  position: relative;

  .input-s {
    position: absolute;
    bottom: -3px;
    right: 3px;
  }
`;

const FormWrapper = styled.div`
  margin-top: 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 18px;

  label {
    color: var(--basic-grey);
    font-weight: bold;
  }
`;
const BtnWrapper = styled.div`
  margin-top: 10px;
`;

const UploadButtonStyle = styled.div`
  /* position: fixed;
  bottom: 16px;
  right: 16px; */
  label {
    width: 36px;
    height: 36px;
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
