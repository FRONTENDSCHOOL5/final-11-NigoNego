import styled from 'styled-components';
import buttonImg from '../../assets/images/upload-file.svg';
const CommonWrapper = styled.section``;
const ChatWrapper = styled.div`
  background-color: var('--light-grey');
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 20px;
`;

// 상대방 메시지
const SenderWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const ChatMessage = styled.div`
  border: 1px solid #dbdbdb;
  padding: 12px;
  word-wrap: break-word;
  max-width: 60%;
  font-size: 14px;
`;
const SenderMessage = styled(ChatMessage)`
  border-radius: 0px 10px 10px 10px;
`;

const ChatMessageTime = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
  color: var(--basic-grey);
`;

// 유저 메시지
const UserWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const UserMessage = styled(ChatMessage)`
  border-radius: 10px 0px 10px 10px;
  background-color: var(--basic-yellow);
  margin-left: 6px;
`;

// 채팅 하단네비바
const ChatNav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  gap: 25px;
  align-items: center;
  padding: 12px 20px;
  border-top: 1px solid var(--light-grey);
`;

const ChattingForm = styled.form`
  height: inherit;
  width: 100%;
`;
const MyChatting = styled.input`
  height: inherit;
  width: 90%;
  border: 0;
`;

const ChattingSend = styled.button`
  height: inherit;
  width: 10%;
  border: 0;
  color: var(--basic-gray);
`;

export const UploadButtonStyle = styled.div`
  position: fixed;
  /* bottom: 16px; */
  right: 16px;
  label {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-image: url(${buttonImg});
    background-size: cover;
  }

  input {
    display: none;
  }

  input::file-selector-button {
    display: none;
  }
`;

export {
  CommonWrapper,
  SenderWrapper,
  ChattingForm,
  ChattingSend,
  ChatMessage,
  ChatMessageTime,
  ChatWrapper,
  ChatNav,
  UserWrapper,
  MyChatting,
  SenderMessage,
  UserMessage,
};
