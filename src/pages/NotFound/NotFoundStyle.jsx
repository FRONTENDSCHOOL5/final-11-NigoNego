import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  text-align: center;
  background: linear-gradient(to bottom, #ffffff, #f5ecff);
`;
const Image = styled.img`
  margin-top: 30vh;
`;

const NotFoundText = styled.p`
  font-size: 16px;
`;
const NotFoundBtn = styled.button`
  border: none;
  border-radius: 20px;
  background-color: var(--basic-yellow);
  padding: 10px 20px;
`;

export { Wrapper, Image, NotFoundText, NotFoundBtn };
