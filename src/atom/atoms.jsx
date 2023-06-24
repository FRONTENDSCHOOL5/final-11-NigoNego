import { atom, RecoilRoot, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

//1. 아무것도 설정 안 하고 쓰는 경우
//localStorage에 저장되며, key 이름은 'recoil-persist'로 저장됨
const { persistAtom } = recoilPersist();

//2. sessionStorage에 저장하고 싶은 경우
export const authAtom = atom({
  key: 'auth',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const accountAtom = atom({
  key: 'account',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
