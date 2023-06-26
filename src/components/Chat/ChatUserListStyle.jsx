import styled from 'styled-components';

export const StyledUser = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid black;
`;

export const ProfileImgWrapper = styled.div`
  width: 5rem;
  flex-shrink: 0;
`;

export const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: space-evenly;
  padding-left: 1.2rem;
`;

export const UserName = styled.div`
  width: 100%;
  font-size: 14px;
`;

export const UserChat = styled.div`
  font-size: 12px;
  color: var(--basic-grey);
`;

export const ChatDate = styled.p`
  color: var(--basic-grey);
  font-size: 12px;
`;
