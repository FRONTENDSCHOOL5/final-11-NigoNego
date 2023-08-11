import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const atomMyData = atom({
  key: 'myData',
  default: '',
  effects_UNSTABLE: [recoilPersist],
});

export default atomMyData;
