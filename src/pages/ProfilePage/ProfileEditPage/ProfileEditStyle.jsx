import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const HeadingWrapper = styled.div`
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin-top: 1.875rem;
  justify-content: center;
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

export { Wrapper, HeadingWrapper, FormWrapper, ImageWrapper, BtnWrapper };
