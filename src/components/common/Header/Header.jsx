import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconSearch } from '../../../assets/image/IconSearch.svg';
import { ReactComponent as IconArrow } from '../../../assets/image/IconArrowLeft.svg';

import { ButtonShort, MoreIconButton } from '../button/Button';
import SearchInput from '../Input/SearchInput';
import { useNavigate } from 'react-router-dom';

export function HeaderBasicNav({ children, disabled }) {
  //뒤로가기 구현
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  //주소가 postupload 일 때만 업로드 버튼 랜더링
  const pathName = window.location.pathname;
  const isPostUpLoad = pathName == '/postupload';
  const isProductUpLoad = pathName == '/product';

  // 뒤로가기 버튼 구현하기;
  return (
    <HeaderDefaultStyle>
      <Arrow />
      {(!isPostUpLoad && !isProductUpLoad) ? (
        <MoreIconButton />
      ) : (
        <ButtonShort disabled={disabled}>{children}</ButtonShort>
      )}

    </HeaderDefaultStyle>
  );
}

// export function HeaderUploadNav({ disabled, children }) {
//     return (
//         <HeaderDefaultStyle>
//             <Arrow />
//             <ButtonShort disabled={disabled}>{children}</ButtonShort>
//         </HeaderDefaultStyle>
//     );
// }

//상단 화살표 스타일
const arrow = () => {
  return {
    width: '24px',
    height: '24px',
  };
};

export function Arrow() {
  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };
  return (
    <ArrowLeftStyle onClick={handleback}>
      <IconArrow style={arrow()} />
    </ArrowLeftStyle>
  );
}

const ArrowLeftStyle = styled.div`
  & {
    img {
      vertical-align: middle;
    }
  }
  :hover {
    cursor: pointer;
  }
`;

export function HeaderSearchNav() {
  return (
    <HeaderDefaultStyle>
      <IconArrow />
      <div className="inputComponent">
        <SearchInput />
      </div>
    </HeaderDefaultStyle>
  );
}

export function HeaderMainNav({ content }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/search'); // 넘어가고자 하는 페이지의 경로를 설정해주세요
  };

  return (
    <HeaderDefaultStyle>
      <h1>{content}</h1>

      <button onClick={handleButtonClick} type="button">
        <IconSearch width="24px" height="24px" />
      </button>
    </HeaderDefaultStyle>
  );
}


export function HeaderEditdNav({ content, isFormValid, handleSave }) {
  return (
    <HeaderDefaultStyle>
      <Arrow />
      <ProfileEditMSBtn
        content={content}
        onClick={handleSave}
        disabled={!isFormValid}
      />
    </HeaderDefaultStyle>
  );
}

export function HeaderChatNav(props) {
  return (
    <HeaderDefaultStyle>
      <div className="havetitle">
        <Arrow />
        <h2>{props.children}</h2>
      </div>
      <MoreIconButton />
    </HeaderDefaultStyle>
  );
}

export function MSBtn({ content, disabled }) {
  return <MSBtnStyle disabled={disabled}>{content}</MSBtnStyle>;
}

export function ProfileEditMSBtn({ content, onClick, disabled }) {
  return (
    <MSBtnStyle
      onClick={onClick}
      disabled={disabled}
      className={disabled ? 'disabled' : ''}
    >
      {content}
    </MSBtnStyle>
  );
}

const BtnCommonStlye = styled.button`
  border-radius: 44px;
  border-style: none;
  background-color: var(--basic-yellow);
  color: #000;
  display: block;
`;

const MSBtnStyle = styled(BtnCommonStlye)`
  width: 90px;
  height: 32px;
  padding: 7px;
  background-color: ${({ disabled }) =>
    disabled ? ' var(--light-yellow)' : ' var(--basic-yellow)'};
  color: ${({ disabled }) => (disabled ? '' : 'black')};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

// // 상단바 기본 style
const HeaderDefaultStyle = styled.div`
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  button {
    border: none;
  }
  height: 4.8rem;
  border-bottom: 1px solid var(--basic-border-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;
  top: 0;
  z-index: 100;
  padding: 0 10px;
  background-color: #fff;
  .inputComponent {
    width: 100%;
    margin-left: 12px;
  }
  .havetitle {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 12px;
    }
  }
`;
