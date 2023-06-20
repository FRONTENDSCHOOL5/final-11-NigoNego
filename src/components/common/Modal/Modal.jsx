import React, { useState } from 'react';
import styled from 'styled-components';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    console.log('삭제 완료');
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalText>상품을 삭제할까요?</ModalText>
      <ButtonContainer>
        <Button type="submit" onClick={handleCancel}>
          취소
        </Button>
        <Button type="submit" delete onClick={handleDelete}>
          삭제
        </Button>
      </ButtonContainer>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid var(--basic-border-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalText = styled.p`
  position: relative;
  padding: 12px 62px;
  font-weight: bold;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid var(--basic-border-color);
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 14px;
  font-size: 16px;
  ${props =>
    props.delete &&
    `
    border-left: 1px solid var(--basic-border-color);
    color: var(--basic-orange);
  `}
`;
