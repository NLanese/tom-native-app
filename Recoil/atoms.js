import { atom } from 'recoil';

export const userState = atom({
	key: 'userState',
	default: false,
});

export const threadState = atom({
	key: 'threadState',
	default: false,
});

export const websiteState = atom({
	key: 'website',
	default: 'Landing',
});