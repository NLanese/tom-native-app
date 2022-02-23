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
	key: 'websiteState',
	default: 'Landing',
});

export const geoLocation = atom({
	key: 'geoLocation',
	default: false
})

export const accidentDataState = atom({
	key: 'accidentDataState',
	default: false
})

export const collisionDataState = atom({
	key: 'collisionDataState',
	default: false
})

export const collisionIdState = atom ({
	key: 'collisionIdState',
	default: false
})