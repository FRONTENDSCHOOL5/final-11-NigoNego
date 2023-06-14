import React from 'react';
import styled from 'styled-components';


function Input({ label, type, id, name, placeholder }) {
  return (
    <div>
      <InputWrapper>
        <LabelStyle htmlFor={id}>{label}</LabelStyle>
        <InputStyle type={type} id={id} name={name} placeholder={placeholder} />
        {/* 경고 문구 만들기 */}
      </InputWrapper>
    </div>
  );
}

export default Input;

const InputWrapper = styled.div`
  text-align: left;
`;

const InputStyle = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--basic-grey);
  height: 30px;
`;

const LabelStyle = styled.label`
  color: black;
  width: 100%;
`;
