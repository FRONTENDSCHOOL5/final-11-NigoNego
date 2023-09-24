import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FileUploadInput from '../../components/common/Input/FileUploadInput';

import Input from '../../components/common/Input/Input';
import { LBtn, LdisabledBtn } from '../../components/common/button/Button';
import { LImage } from '../../components/common/UserImage/UserImage';
import MainWrapperF from '../../styles/MainGlobal';

import JoinMemberAPI from '../../api/JoinMemberAPI';
import styled from 'styled-components';
import Layout from '../../styles/Layout';

export default function JoinMember() {
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [userIntro, setUserIntro] = useState(false);
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isUserIDValid, setIsUserIDValid] = useState(false);
  const [errorMessageID, setErrorMessageID] = useState('');
  const [userImage, setUserImage] = useState('');
  const location = useLocation();

  const [userInfo, setUserInfo] = useState({
    user: {
      username: '',
      email: location.state?.email, // 사용자 이메일 값
      password: location.state?.password, // 사용자 패스워드 값
      accountname: '',
      intro: '', // 사용자 소개 값
      image: '', // 사용자 이미지 값}
    },
  });

  const navigate = useNavigate();

  const handleUserNameChange = e => {
    setUserName(e.target.value);
  };

  const handleUserIDChange = e => {
    const newUserID = e.target.value;
    setUserID(newUserID);
    setIsUserIDValid(false); // ID 변경 시에 isUserIDValid 상태를 초기화합니다.
    if (/^[a-zA-Z0-9]+$/.test(newUserID)) {
      setErrorMessageID(''); // 유효한 ID인 경우 오류 메시지를 초기화합니다.
    }
  };

  const handleUserIntro = e => {
    setUserIntro(e.target.value);
  };

  const handleNameValid = () => {
    if (userName.length >= 2 && userName.length <= 10) {
      setIsUserNameValid(true);
    } else {
      setIsUserNameValid(false);
    }
  };

  const handleIdValid = async () => {
    const testID = /^[a-zA-Z0-9]+$/.test(userID);

    if (testID) {
      try {
        const res = await axios.post(
          'https://api.mandarin.weniv.co.kr/user/accountnamevalid',
          {
            user: {
              accountname: userID,
            },
          },
        );
        if (res.data.message === '이미 가입된 계정ID 입니다.') {
          setIsUserIDValid(false);
          setErrorMessageID('이미 사용 중인 ID 입니다.');
        } else {
          setIsUserIDValid(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsUserIDValid(false);
      setErrorMessageID('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
    }
  };

  const handleImageUpload = e => {
    e.preventDefault();

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    axios({
      method: 'POST',
      url: 'https://api.mandarin.weniv.co.kr/image/uploadfile',
      data: formData,
    }).then(result => {
      const imageUrl = `https://api.mandarin.weniv.co.kr/${result.data.filename}`;
      setUserImage(imageUrl);
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (isUserNameValid && isUserIDValid) {
      setIsFormValid(true);
      const res = await JoinMemberAPI();
    } else {
      setIsFormValid(false);
    }
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

        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <Input
              label="사용자이름"
              type="text"
              id="user-name"
              name="user-name"
              placeholder="2~10자 이내"
              value={userInfo.user.userName}
              onChange={handleUserNameChange}
              onBlur={handleNameValid}
            />
            <Input
              label="계정ID"
              type="text"
              id="user-ID"
              name="user-ID"
              placeholder="영문, 숫자 특수문자만 사용가능"
              value={userInfo.user.userID}
              onChange={handleUserIDChange}
              onBlur={handleIdValid}
              errorMessage={errorMessageID}
            />
            <Input
              label="소개"
              type="text"
              id="user-intro"
              name="user-intro"
              value={userInfo.user.userIntro}
              onChange={handleUserIntro}
              placeholder="자신과 판매할 상품에 대해 소개"
            />

            {/* <BtnWrapper>
              {isFormValid ? (
                <LBtn content="감귤마켓 시작하기" />
              ) : (
                <LdisabledBtn content="감귤마켓 시작하기" />
              )}
            </BtnWrapper> */}
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
