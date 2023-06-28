import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useRecoilValue } from 'recoil';
// import { authAtom } from '../../../../atom/atoms';
// import { GetCommentData } from '../../../../api/getData/getData';
import styled from 'styled-components';
import { XSImage } from '../../UserImage/UserImage';
import { MoreIconButton, MoreIconButtonStyle } from '../../button/Button';
import { useNavigate } from 'react-router-dom';
import { accountNameAtom } from '../../../../atom/atoms';
import moreIcon from '../../../../assets/icons/icon-more-vertical.png';
import SlideModal, { CommentSlideModal } from '../../Modal/SlideModal';

function CommentPost(comment) {
  const navigate = useNavigate();
  const accountname = useRecoilValue(accountNameAtom);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [isMyComment, setIsMyComment] = useState(false);
  // const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    if (comment.comment.author.accountname === accountname) {
      setIsMyComment(true);
    } else {
      setIsMyComment(false);
    }
    console.log(isMyComment);
  }, []);

  useEffect(() => {
    setIsSlideOpen(false);
  }, []);

  const getCommentTime = time => {
    const timeValue = new Date(time);
    const end = new Date();
    const diff = Math.floor((end.getTime() - timeValue.getTime()) / 1000); // 경과 시간 (초로 계산)

    // 60초 전
    if (diff < 60) {
      return '방금 전';
      // 1시간 미만 (60초 * 60분)
    } else if (diff < 3600) {
      return `${Math.floor(diff / 60)}분 전`;
      // 하루 미만 (24시간 -> 60초 * 60분 * 24시간)
    } else if (diff < 86400) {
      return `${Math.floor(diff / 3600)}시간 전`;
      // 한달 미만 (대략 30일 -> 86400 * 30)
    } else if (diff < 2592000) {
      return `${Math.floor(diff / 86400)}일 전`;
      // 1년 미만 (12달 -> 86400 * 30 * 12달)
    } else if (diff < 31104000) {
      return `${Math.floor(diff / 2592000)}달 전`;
    } else {
      return '오래 전';
    }
  };

  const profileHandler = e => {
    if (isMyComment) {
      navigate(`/myprofile`, {
        state: { user: accountname },
      });
    } else {
      navigate('/yourprofile', {
        state: {
          accountname: comment.comment.author.accountname,
        },
      });
    }
  };

  const closeModal = () => {
    setIsSlideOpen(false);
  };

  return (
    <CommentPostWrapper>
      <CommentHead>
        <ImgWrapper onClick={profileHandler}>
          <XSImage backgroundUrl={comment.comment.author.image} />
        </ImgWrapper>
        <NameWrapper onClick={profileHandler}>
          {comment.comment.author.username}{' '}
          <div className="timeline">{`${getCommentTime(
            comment.comment.createdAt,
          )}`}</div>
        </NameWrapper>
        <ButtonWrapper>
          <MoreIconButtonStyle
            onClick={() => {
              setIsSlideOpen(true);
              console.log(isSlideOpen);
            }}
          >
            <img src={moreIcon} alt="" />
          </MoreIconButtonStyle>
          {isSlideOpen && (
            <CommentSlideModal
              isMyComment={isMyComment}
              closeModal={closeModal}
            />
          )}
        </ButtonWrapper>
      </CommentHead>
      <CommentText content={comment.comment.content} />
    </CommentPostWrapper>
  );
}

function CommentText({ content }) {
  return <CommentTextStyle>{content}</CommentTextStyle>;
}

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  margin: 0 0 0 auto;
`;

// const CommentName= styled.div`

// `

const ImgWrapper = styled.div`
  margin-right: 12px;
`;

const CommentHead = styled.div`
  display: flex;
  height: 38px;
  align-items: center;
  & > h2 {
    font-size: 14px;
  }

  .timeline {
    line-height: 12.5px;
    font-size: 10px;
    color: #767676;
    vertical-align: middle;
    position: relative;
    padding-left: 10px;
    &::before {
      content: '';
      display: inline-block;
      width: 1px;
      height: 1px;
      margin: 0 5px;
      background-color: #767676;
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translate(-50%, -50%);
      /* vertical-align: middle; */
    }
  }
`;

const CommentPostWrapper = styled.div`
  margin-bottom: 16px;
`;

const CommentTextStyle = styled.p`
  margin: 0 0 0 48px;
  padding-right: 12px;
`;

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

export default CommentPost;
