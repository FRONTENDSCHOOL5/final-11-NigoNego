import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import slideIcon from '../../../assets/icons/slide-top-icon.png';
import { LogoutModal, CommentModal } from './Modal';

export default function SlideModal() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleItemClick = page => {
    if (page === '/LogoutModal') {
      setShowLogoutModal(true);
    } else {
      navigate(page);
    }
  };

  return (
    <SlideModalWrapper>
      <img src={slideIcon} alt="" />
      <StyledUl>
        <StyledLi onClick={() => handleItemClick('/settings')}>
          설정 및 개인정보
        </StyledLi>
        <StyledLi onClick={() => handleItemClick('/LogoutModal')}>
          로그아웃
        </StyledLi>
      </StyledUl>
      {showLogoutModal && (
        <LogoutModal onClose={() => setShowLogoutModal(false)} />
      )}
    </SlideModalWrapper>
  );
}

//댓글 슬라이드 모달 추가

export function CommentSlideModal({ isMyComment, closeModal }) {
  return (
    <SlideModalBackground onClick={closeModal}>
      <SlideModalWrapper>
        <img src={slideIcon} alt="" />
        <StyledUl>
          {isMyComment ? (
            <>
              <StyledLi>삭제</StyledLi>
              <StyledLi>수정</StyledLi>
            </>
          ) : (
            <StyledLi>신고하기</StyledLi>
          )}
        </StyledUl>
      </SlideModalWrapper>
    </SlideModalBackground>
  );
}

const SlideModalBackground = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;
`;
const SlideModalWrapper = styled.div`
  text-align: center;
  padding: 10px 0;
  border: 3px solid black;
  border-radius: 10px 10px 0 0;
  position: fixed;
  left: 0px;
  bottom: 66px;
  background-color: white;
  width: 100%;
  z-index: 100;
`;

const StyledUl = styled.ul`
  text-align: initial;
`;

const StyledLi = styled.li`
  padding: 20px;
`;
