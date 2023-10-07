import styled from "styled-components";
import basicImg from '../../../assets/images/basic-profile-img.png';

const UserProfileCircle = ({isWidth}) => {
    return (
        <UserProfileCircleStyle isWidth={isWidth} style={{ backgroundImage: `url(${basicImg})`}}>
        </UserProfileCircleStyle>
    )
}

export default UserProfileCircle;

const UserProfileCircleStyle = styled.div`
  width: ${({isWidth}) => (isWidth ? isWidth : '100%')};
  height: ${({isWidth}) => isWidth};

  border-radius: 50%;
  background-size: cover;
`