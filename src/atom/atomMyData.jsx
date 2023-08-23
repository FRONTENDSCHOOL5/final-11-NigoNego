import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const atomMyData = atom({
  key: 'myData',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export default atomMyData;
