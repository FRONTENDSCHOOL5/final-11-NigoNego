import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { authAtom, accountNameAtom, followingAtom } from '../../../atom/atoms';
import { useRecoilState, useResetRecoilState } from 'recoil';

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

export function LogoutModal({ onClose }) {
  const [auth, setAuth] = useRecoilState(authAtom);
  const [accountname, setAccountnameAtom] = useRecoilState(accountNameAtom);
  const [following, setFollowing] = useRecoilState(followingAtom);

  const resetAuth = useResetRecoilState(authAtom);
  const resetAccount = useResetRecoilState(accountNameAtom);
  const resetFollowing = useResetRecoilState(followingAtom);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('로그아웃 완료');
    setIsOpen(false);
    resetAuth();
    resetAccount();
    resetFollowing();
    navigate('/login');
  };

  // const handleCancle = () => {
  //   onClose();
  // };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalText>로그아웃을 할까요?</ModalText>
      <ButtonContainer>
        <Button type="submit" onClick={onClose}>
          취소
        </Button>
        <Button type="submit" delete onClick={handleLogout}>
          로그아웃
        </Button>
      </ButtonContainer>
    </ModalWrapper>
  );
}

//댓글 모달 추가
export function CommentModal() {
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
      <ModalText>댓글을 삭제할까요?</ModalText>
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
