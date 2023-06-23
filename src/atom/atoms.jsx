import { atom } from 'recoil';

export const authAtom = atom({
  key: 'auth',
  default: JSON.parse(localStorage.getItem('auth')),
});

export const accountAtom = atom({
  key: 'account',
  default: JSON.parse(localStorage.getItem('account')),
});
