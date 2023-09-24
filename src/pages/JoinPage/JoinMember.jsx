import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FileUploadInput from '../../components/common/Input/FileUploadInput';

import Input from '../../components/common/Input/Input';
import { ButtonLong } from '../../components/common/button/Button';
import { LImage } from '../../components/common/UserImage/UserImage';
import MainWrapperF from '../../styles/MainGlobal';
import styled from 'styled-components';
import UseFetchToken from '../../Hooks/UseFetchToken';
import Layout from '../../styles/Layout';

export default function JoinMember() {
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [userIntro, setUserIntro] = useState('');
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isUserIDValid, setIsUserIDValid] = useState(false);
  const [errorMessageID, setErrorMessageID] = useState('');
  const [userImage, setUserImage] = useState('');
  const location = useLocation();
  const { postJoinMemberValid, postJoinImage, postJoinMember } =
    UseFetchToken();

  const [userInfo, setUserInfo] = useState({
    user: {
      username: '',
      email: location.state?.email || '', // 사용자 이메일 값
      password: location.state?.password || '', // 사용자 패스워드 값
      accountname: '',
      intro: '', // 사용자 소개 값
      image: '', // 사용자 이미지 값}
    },
  });

  const navigate = useNavigate();

  //이미지 업로드
  const handleImageUpload = async e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    await postJoinImage(formData).then(res => {
      const imageUrl = `https://api.mandarin.weniv.co.kr/${res.data.filename}`;
      setUserImage(imageUrl);
    });
  };

  //사용자 이름 validation
  const handleUserNameChange = e => {
    const newUserName = e.target.value;
    console.log(newUserName);
    setUserName(newUserName);
  };

  const handleNameValid = () => {
    if (userName.length >= 2 && userName.length <= 10) {
      setIsUserNameValid(true);
    } else {
      setIsUserNameValid(false);
    }
  };

  const handleUserIDChange = e => {
    const newUserID = e.target.value;
    setUserID(newUserID);
    console.log(newUserID);
    console.log(userInfo.user.accountname);
    setIsUserIDValid(false); // ID 변경 시에 isUserIDValid 상태를 초기화합니다.
    if (/^[a-zA-Z0-9]+$/.test(newUserID)) {
      setErrorMessageID(''); // 유효한 ID인 경우 오류 메시지를 초기화합니다.
    }
  };

  //accountname validation
  const handleIdValid = async () => {
    const testID = /^[a-zA-Z0-9]+$/.test(userID);

    if (testID) {
      const res = await postJoinMemberValid({
        user: {
          accountname: userID,
        },
      });
      if (res.data.message === '이미 가입된 계정ID 입니다.') {
        setIsUserIDValid(false);
        setErrorMessageID('이미 사용 중인 ID 입니다.');
        console.log(res.data);
      } else {
        setIsUserIDValid(true);
        console.log(res);
      }
    } else {
      setIsUserIDValid(false);
      setErrorMessageID('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
    }
  };

  const idValidHandler = event => {
    event.preventDefault();
    handleIdValid();
  };

  const handleUserIntro = e => {
    const newIntro = e.target.value;
    setUserIntro(newIntro);
  };

  // 여기에 userdata 에 value 값을 저장하는 로직이 있어야하지 않나...?
  // => post joinMember
  const handleSubmit = async () => {
    const updateUserInfo = {
      ...userInfo,
      user: {
        ...userInfo.user,
        username: userName,
        accountname: userID,
        intro: userIntro,
        image: userImage,
      },
    };
    if (isUserNameValid && isUserIDValid) {
      setIsFormValid(true);
      await postJoinMember(updateUserInfo);
    } else {
      setIsFormValid(false);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    handleSubmit();
    navigate('/login');
  };

  return (
    <Layout>
      <MainWrapperF>
        <HeadingWrapper>
          <h1>프로필 설정</h1>
          <p>나중에 언제든지 변경할 수 있습니다.</p>
        </HeadingWrapper>

        <FileUploadWrapper>
          <LImage backgroundUrl={userImage} />
          <FileUploadInput
            backgroundUrl={userImage}
            id="input"
            type="file"
            onChange={handleImageUpload}
          />
        </FileUploadWrapper>

        <form onSubmit={submitHandler}>
          <FormWrapper>
            <Input
              label="사용자이름"
              type="text"
              id="user-name"
              name="user-name"
              placeholder="2~10자 이내"
              value={userName}
              onChange={handleUserNameChange}
              onBlur={handleNameValid}
            />
            <Input
              label="계정ID"
              type="text"
              id="user-ID"
              name="user-ID"
              placeholder="영문, 숫자 특수문자만 사용가능"
              value={userID}
              onChange={handleUserIDChange}
              onBlur={idValidHandler}
              errorMessage={errorMessageID}
            />
            <Input
              label="소개"
              type="text"
              id="user-intro"
              name="user-intro"
              value={userIntro}
              onChange={handleUserIntro}
              placeholder="자신과 판매할 상품에 대해 소개"
            />
            <BtnWrapper>
              {/* 버튼수정 필요함 */}
              {isFormValid ? (
                <ButtonLong
                  type="submit"
                  children="니고네고 시작하기"
                  disabled={false}
                />
              ) : (
                <ButtonLong
                  type="submit"
                  children="니고네고 시작하기"
                  disabled={true}
                />
              )}
            </BtnWrapper>
          </FormWrapper>
        </form>
      </MainWrapperF>
    </Layout>

  );
}

const Wrapper = styled.div`
  flex-direction: column;
`;
const HeadingWrapper = styled.div`
  text-align: center;
`;

const FileUploadWrapper = styled.div`
  margin-top: 1.875rem;
  width: 112px;
  margin: auto;
  position: relative;

  .input-s {
    position: absolute;
    bottom: -3px;
    right: 3px;
  }
`;

const FormWrapper = styled.div`
  margin-top: 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 18px;

  label {
    color: var(--basic-grey);
    font-weight: bold;
  }
`;
const BtnWrapper = styled.div`
  margin-top: 10px;
`;
