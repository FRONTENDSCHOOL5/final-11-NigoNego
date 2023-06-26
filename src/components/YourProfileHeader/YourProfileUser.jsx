import React from 'react';
import ProfileUser from '../ProfileHeader/ProfileUser';

export default function YourProfileUser({ myProfileData }) {
  return (
    <div>
      <ProfileUser myProfileData={myProfileData} />
    </div>
  );
}
