import React from 'react';
import styled from 'styled-components';
import HomePostGridListItem from './HomePostGridListItem';
export default function HomePostGridList({ userPostData }) {
  console.log(userPostData);
  return (
    <GridWrapp>
      {userPostData.map((item, index) => {
        return (
          <div key={index}>
            <HomePostGridListItem img={item} />;
          </div>
        );
      })}
    </GridWrapp>
  );
}

const GridWrapp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  height: 150px;
  margin-right: 10px;
  gap: 10px;
`;
