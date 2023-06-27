import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserSearch from '../common/User/UserSearch';
import { ReactComponent as BtnHeart } from '../../assets/image/BtnHeart.svg';
import { ReactComponent as BtnComment } from '../../assets/image/BtnComment.svg';
import { HomePostImg } from './MyHomePost';

export default function HomePost({ data }) {
  // const [feedPost, setFeedPost] = useState('');
  const navigate = useNavigate();
  const postListRef = useRef(null);

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
    <HomePostwarpper ref={postListRef} className="HomePost">
      <UserSearch data={data} />
      {data && data.content && (
        <section className="container" onClick={postMainHandler}>
          <p>{data.content}</p>
          <HomePostImg src={data.image} />
          <div className="post-item-wrapper">
            <button type="button">
              <BtnComment width="24px" />
              <span>{data.commentCount}</span>
            </button>
            <button type="button">
              <BtnHeart width="24px" fill="none" stroke="#767676" />
              <span>{data.heartCount}</span>
            </button>
          </div>
          <time>{data.updatedAt}</time>
        </section>
      )}
    </HomePostwarpper>
  );
}

const HomePostwarpper = styled.div`
  margin-top: 20px;
  /* box-shadow: inset 0px 0px 3px 5px rgb(0, 38, 255); */

  .icon-wrapper {
    margin: 10px 0;
  }

  .container {
    margin-left: 70px;
    max-width: 700px;

    p {
      margin: 0 0 10px 0;
    }
  }
  button {
    border: none;
  }

  .post-item-wrapper {
    padding: 10px 0;

    button {
      padding: 0 10px 0 0;
    }
  }
`;
