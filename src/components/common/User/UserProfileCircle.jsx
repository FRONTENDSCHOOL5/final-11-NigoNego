import styled from "styled-components";
import basicImg from '../../../assets/images/basic-profile-img.png';

const UserProfileCircle = () => {
    return (
        <UserProfileCircleStyle style={{ backgroundImage: `url(${basicImg})`}}>
        </UserProfileCircleStyle>
    )
}

export default UserProfileCircle;

const UserProfileCircleStyle = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-size: cover;
`