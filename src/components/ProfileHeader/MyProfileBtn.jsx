import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FollowBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
const BtnCommonStlye = styled.button`
  border-radius: 44px;
  border-style: none;
  background-color: var(--basic-yellow);
  color: #000;
  display: block;
`;
const MActivBtnStyle = styled(BtnCommonStlye)`
  color: var(--basic-grey);
  background-color: white;
  border: 1px solid #dbdbdb;
  width: 120px;
  padding: 8px;
`;
export default function FllowBtn() {
  const navigate = useNavigate();

  const handleProfileEdit = () => {
    navigate('/profileedit');
  };

  const handleProduct = () => {
    navigate('/product');
  };

  return (
    <FollowBtnWrapper>
      <MActivBtnStyle onClick={handleProfileEdit}>프로필 수정</MActivBtnStyle>
      <MActivBtnStyle onClick={handleProduct}>상품등록</MActivBtnStyle>
    </FollowBtnWrapper>
  );
}
