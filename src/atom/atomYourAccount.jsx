import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const atomYourAccount = atom({
  key: 'yourAccount',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export default atomYourAccount;
