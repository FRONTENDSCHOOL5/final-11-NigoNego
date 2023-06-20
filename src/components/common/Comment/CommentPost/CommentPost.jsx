import React from 'react';
import styled from 'styled-components';
import { XSImage } from '../../UserImage/UserImage';
import { MoreIconButton } from '../../button/Button';

function CommentPost() {
  return (
    <CommentPostWrapper>
      <CommentHead>
        <ImgWrapper>
          <XSImage />
        </ImgWrapper>
        <NameWrapper>
          안녕하세요 <div className="timeline">5분전</div>
        </NameWrapper>
        <ButtonWrapper>
          <MoreIconButton />
        </ButtonWrapper>
      </CommentHead>
      <CommentText contents="내용입니다내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다." />
    </CommentPostWrapper>
  );
}

function CommentText({ contents }) {
  return <CommentTextStyle>{contents}</CommentTextStyle>;
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

export default CommentPost;
