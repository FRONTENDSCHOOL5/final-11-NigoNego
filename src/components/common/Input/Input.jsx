import React from 'react';
import styled, { css } from 'styled-components';

function Input({
  label,
  type,
  id,
  name,
  placeholder,
  onChange,
  onBlur,
  validation,
  isCorrect,
  errorMessage,
}) {
  return (
    <div>
      <InputWrapper>
        <LabelStyle htmlFor={id}>{label}</LabelStyle>
        <InputStyle
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          validation={validation}
          isCorrect={isCorrect}
        />
        {!isCorrect && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputWrapper>
    </div>
  );
}

export default Input;

const ErrorMessage = styled.div`
  color: var(--basic-red);
`;

const InputWrapper = styled.div`
  text-align: left;
`;

const InputStyle = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--basic-grey);
  height: 30px;
  &:focus {
    outline: none;
    border-bottom-color: var(--basic-yellow);
  }
  /* validation안맞거나 아이디 중복 일때 빨간 경고줄 */

  //이전코드
  /* ${props =>
    props.isCorrect === false &&
    css`
      border-bottom-color: red;
    `}; */

  //수정후 코드
  border-bottom-color: ${props => props.isCorrect === false && 'red'};
`;

const LabelStyle = styled.label`
  color: black;
  width: 100%;
`;
