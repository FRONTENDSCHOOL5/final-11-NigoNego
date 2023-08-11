import React from 'react';
import styled, { css } from 'styled-components';

const Input = ({
  id,
  ...props
}) => {
  return (
    <>
      <LabelStyle htmlFor={id} {...props}>
        {props.label}
      </LabelStyle>
      <InputStyle
        id={id}
        {...props}
      />
      {props.isCorrect ? null : (
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      )}
    </>
  );
};

const InputStyle = styled.input`
  width: ${props => props.width || '100%'};
  border: none;
  height: 30px;
  &:focus {
    outline: none;
    border-bottom-color: var(--basic-yellow);
  }
  border-bottom: 1px solid #999;
`;

const LabelStyle = styled.label`
  text-align: ${props => props.textAlign || 'left'};
  color: black;
  width: 100%;
`;

// validation 밑줄을 button 컴포넌트에서 처리할 수 있도록 변경?
const ErrorMessage = styled.div`
  text-align: ${props => props.textAlign || 'left'};
  color: var(--basic-red);
`;

export default Input;
