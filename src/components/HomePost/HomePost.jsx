import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserSearch from '../common/User/UserSearch';
import { ReactComponent as BtnHeart } from '../../assets/image/BtnHeart.svg';
import { ReactComponent as BtnHeartF } from '../../assets/image/BtnHeart.svg';
import { ReactComponent as BtnComment } from '../../assets/image/BtnComment.svg';
import Heart from '../common/Heart/Heart';

export default function HomePost({ data }) {
  // const [feedPost, setFeedPost] = useState('');
  const navigate = useNavigate();
  const postListRef = useRef(null);

  const postMainHandler = e => {
    // setPostId(id);
    console.log(e.target.value);
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
        <section className="container">
          <div onClick={postMainHandler}>
            <p>{data.content}</p>
            <HomePostImg src={data.image} />
          </div>
          <div className="post-item-wrapper">
            <button type="button" className="btn" onClick={postMainHandler}>
              <BtnComment width="24px" />
              <span>{data.commentCount}</span>
            </button>
            <Heart />
          </div>
          {/* <time>{data.updatedAt}</time> */}
        </section>
      )}
    </HomePostwarpper>
  );
}

const HomePostImg = styled.img`
  width: 100%;
  aspect-ratio: 5 / 3;
  border-radius: 10px;
  object-fit: cover;
`;

const HomePostwarpper = styled.div`
  margin-top: 20px;
  /* box-shadow: inset 0px 0px 3px 5px rgb(0, 38, 255); */

  .icon-wrapper {
    margin: 10px 0;
  }

  .container {
    margin: 0 20px 0 70px;
    max-width: 700px;

    p {
      margin: 0 0 10px 0;
    }
  }

  .post-item-wrapper {
    padding: 10px 0;
    display: flex;
  }

  .btn {
    border: none;
    padding: 0 10px 0 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;
