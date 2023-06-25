import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import msg from '../../assets/icons/message-icon.svg';
import like from '../../assets/icons/like-icon.svg';
import UserSearch from '../common/User/UserSearch';
import { ReactComponent as BtnHeart } from '../../assets/image/BtnHeart.svg';
import { ReactComponent as BtnComment } from '../../assets/image/BtnComment.svg';

export default function HomePost({ data }) {
  // const [feedPost, setFeedPost] = useState('');
  const navigate = useNavigate();

  const postMainHandler = () => {
    // setPostId(id);
    console.log(data.id);
    navigate('/postmain', {
      state: {
        id: data.id,
      },
    });
  };

  return (
    <>
      <UserSearch data={data} />
      {data && data.content && (
        <section onClick={postMainHandler}>
          <p>{data.content}</p>
          <HomePostImg src={data.image} />
          <div>
            <button type="button">
              <BtnComment width="24px" />
              <span>123</span>
            </button>
            <button type="button">
              <BtnHeart width="24px" fill="none" stroke="#767676" />
              <span>123</span>
            </button>
          </div>
          <time>{data.updatedAt}</time>
        </section>
      )}
    </>
  );
}

const HomePostImg = styled.img`
  vertical-align: middle;
  padding-bottom: 10px;
  width: 100%;
`;
