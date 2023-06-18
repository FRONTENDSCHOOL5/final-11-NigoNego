import React, { useState } from 'react';
import {
  FormWrapper,
  HeadingWrapper,
  Wrapper,
  ImageWrapper,
  BtnWrapper,
} from './joinMemberStyle';
import Input from '../../components/common/Input/Input';
import { LBtn, LdisabledBtn } from '../../components/common/button/Button';
import { LImage } from '../../components/common/UserImage/UserImage';
import basicImg from '../../assets/images/basic-profile-img.png';

export default function JoinMember() {
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleUserNameChange = e => {
    setUserName(e.target.value);
  };

  const handleUserIDChange = e => {
    setUserID(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // 사용자 이름 유효성 확인
    const isUserNameValid = userName.length >= 2 && userName.length <= 10;

    // 계정 ID 유효성 확인
    const isUserIDValid = /^[a-zA-Z0-9]+$/.test(userID);

    if (isUserNameValid && isUserIDValid) {
      setIsFormValid(true);
      // 다음 단계로 진행하는 로직 추가
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <Wrapper>
      <HeadingWrapper>
        <h1>프로필 설정</h1>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
      </HeadingWrapper>
      <ImageWrapper>
        <LImage src={basicImg} />
      </ImageWrapper>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <Input
            label="사용자이름"
            type="text"
            id="user-name"
            name="user-name"
            placeholder="2~10자 이내"
            value={userName}
            onChange={handleUserNameChange}
          />
          <Input
            label="계정ID"
            type="text"
            id="user-ID"
            name="user-ID"
            placeholder="영문, 숫자 특수문자만 사용가능"
            value={userID}
            onChange={handleUserIDChange}
          />
          <Input
            label="소개"
            type="text"
            id="user-intro"
            name="user-intro"
            placeholder="자신과 판매할 상품에 대해 소개"
          />
          <BtnWrapper>
            {isFormValid ? (
              <LBtn content="감귤마켓 시작하기" />
            ) : (
              <LdisabledBtn content="감귤마켓 시작하기" />
            )}
          </BtnWrapper>
        </FormWrapper>
      </form>
    </Wrapper>
  );
}
