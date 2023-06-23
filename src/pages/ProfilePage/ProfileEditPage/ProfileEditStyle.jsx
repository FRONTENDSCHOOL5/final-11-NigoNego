import styled from 'styled-components';

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

export { Wrapper, HeadingWrapper, FormWrapper, ImageWrapper, BtnWrapper };
