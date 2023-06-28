import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import msg from '../../assets/icons/message-icon.svg';
import like from '../../assets/icons/like-icon.svg';
import axios from 'axios';
import UserSearch from '../common/User/UserSearch';
import MyHomePost from './MyHomePost';

export default function YourHomePost({ accountname }) {
  return <MyHomePost accountname={accountname} />;
}
