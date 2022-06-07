import { atom } from 'recoil';


/////////////
// GENERAL //
////////////
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
	default: {current: "Landing", previous: "Landing"},
});

///////////////
// ACCIDENTS // 
///////////////

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
	default: null
})

export const collisionIdState = atom({
	key: 'collisionIdState',
	default: false
})

export const ownCarDataState = atom({
	key: 'ownCarDataState',
	default: false
})

export const injuryDataState = atom({
	key: 'injuryDataState',
	default: false
})

export const injuryIdState = atom({
	key: 'injuryIdState',
	default: false
})

export const propertyDataState = atom({
	key: 'propertyDataState',
	default: false
})

export const selfInjuryDataState = atom({
	key: 'selfInjuryDataState',
	default: false
})

////////////
// CAMERA //
////////////

export const cameraPermissionState = atom({
	key: 'cameraPermissionState',
	default: null
})

export const MediaLibraryPermissionState = atom({
	key: 'mediaLibraryPermissionState',
	default: null
})

export const cameraTypeState = atom({
	key: 'cameraTypeState',
	default: null
})

//////////////
// FUNCTION //
//////////////

export const loggedState = atom({
	key: 'loggedKey',
	default: false
})

export const errorDataState = atom({
	key: 'errorKey',
	default: {
		email_login: false,
		password_login: false
	}
})