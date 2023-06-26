import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import slideIcon from '../../../assets/icons/slide-top-icon.png';
import { LogoutModal } from './Modal';

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

const SlideModalWrapper = styled.div`
  text-align: center;
  padding: 10px 0;
  border: 3px solid black;
  border-radius: 10px 10px 0 0;
  position: fixed;
  left: 0px;
  bottom: 50px;
  background-color: white;
  width: 100%;
`;

const StyledUl = styled.ul`
  text-align: initial;
`;

const StyledLi = styled.li`
  padding: 20px;
`;
