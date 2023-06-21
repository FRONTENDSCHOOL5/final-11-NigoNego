import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input/Input';
import { ImageWrapper } from '../../pages/JoinPage/joinMemberStyle';
import { LImage } from '../common/UserImage/UserImage';
import basicImg from '../../assets/images/basic-profile-img.png';
import { HeaderUploadNav } from '../common/Header/Header';

export default function ProfileChangePage() {
  return (
    <ProfileChangePageWrapp>
      <HeaderUploadNav />
      <ImageWrapper>
        <LImage src={basicImg} />
      </ImageWrapper>
      <div className="input-wrapper">
        <Input label="사용자 이름" placeholder="2~10자 이내여야 합니다." />
      </div>
      <div className="input-wrapper">
        <Input
          label="계정 ID"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
      </div>
      <div className="input-wrapper">
        <Input
          label="소개"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </div>
    </ProfileChangePageWrapp>
  );
}

const ProfileChangePageWrapp = styled.div`
  .input-wrapper {
    margin: 20px 0;
  }
`;
