import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MImage } from '../UserImage/UserImage';
import { UserSection, UserName, UserId } from './UserSearch';
import { SBtn } from '../button/Button';
import { GetFollowerData } from '../../../api/getData/getData';
import { useLocation } from 'react-router-dom';

const StyledFollower = styled.section`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

export default function UserFollow() {
  const location = useLocation();
  const userGetData = location.state.value;
  // const userList = props.location.value;
  const [getData, setMyGetData] = useState('');
  useEffect(() => {
    if (userGetData) {
      GetFollowerData(userGetData).then(response => {
        setMyGetData(response.data);
        console.log(getData);
      });
    }
  }, []);

  return (
    <>
      {getData.length > 0 &&
        getData.map(data => {
          return (
            <StyledFollower>
              <MImage backgroundUrl={data.image} />
              <UserSection>
                <UserName>
                  <strong>{data.accountname}</strong>
                </UserName>
                <UserId>{data.intro}</UserId>
              </UserSection>
              <SBtn />
            </StyledFollower>
          );
        })}
    </>
  );
}

// useEffect(() => {
//   // console.log(data.author.accountname);
//   if (accountname) {
//     navigate('/yourprofile', {
//       state: {
//         accountname: accountname,
//       },
//     });
//   }
// }, [accountname]);
