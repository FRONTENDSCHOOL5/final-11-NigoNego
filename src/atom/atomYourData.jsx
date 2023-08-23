import React from 'react';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const atomYourData = atom({
  key: 'yourData',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
export default atomYourData;
