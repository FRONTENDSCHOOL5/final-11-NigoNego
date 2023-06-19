import styled from 'styled-components';

const ChatNavWrapper = styled.nav`
  width: 100%;
  height: 4.8rem;
  border-top: 1px solid var(--basic-border-color);
  color: var(--basic-grey);
  position: fixed;
  bottom: 0px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
`;

const UploadImageWrapper = styled.div`
  background-color: #ccc;
  height: inherit;
  width: 50px;
  text-align: center;
`;

const UploadImage = styled.button`
  width: 4.8rem;
  height: inherit;
  border-radius: 50%;
`;

const Chatting = styled.form`
  height: inherit;
  border: 1px solid black;
  flex-grow: 8;
  font-size: 16px;
`;
const MyChatting = styled.input`
  width: 90%;
  height: inherit;
`;

const ChattingSend = styled.button`
  width: 10%;
  height: inherit;
  /* border: none; */
`;

const ChattingWrapper = styled.div`
  background-color: var('--light-grey');
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const ChatUserWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 10px;
  padding-left: 12px;
  padding-right: 50px;
`;

const ChatMessage = styled.div`
  border: 1px solid black;
  border-radius: 0px 10px 10px 10px;
  padding: 5px;
  word-wrap: break-word;
  max-width: 70%;
  font-size: 16px;
`;

const ChatMessageTime = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
`;

const ChatMyWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  padding-top: 10px;
  padding-left: 12px;
  padding-right: 50px;
`;

export {
  ChatUserWrapper,
  UploadImageWrapper,
  ChatNavWrapper,
  Chatting,
  ChattingSend,
  ChatMessage,
  ChatMessageTime,
  ChattingWrapper,
  ChatMyWrapper,
  UploadImage,
  MyChatting,
};
