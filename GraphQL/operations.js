import { gql } from '@apollo/client';

/* ------------------------------ USERS ------------------------------ */

const SIGNUP = gql`
	mutation Mutation($signupUserSignupInput: SignupInput) {
		signupUser(signupInput: $signupUserSignupInput) {
			id
			firstname
			lastname
			username
			email
			token
		}
	}
`;

const LOGIN = gql`
	mutation Mutation($email: String!, $password: String!) {
  signinUser(email: $email, password: $password) {
    id
    firstname
    lastname
    email
    password
    phoneNumber
    token
    employeeId
    adminId
    adminFirstname
    adminLastname
    adminUsername
    adminEmail
    adminAccountStanding
    adminApproved
  }
}
`;

const CREATEACCIDENT = gql`
  mutation Mutation($name: String!, $usingSafety: Boolean!, $safetyFailed: Boolean!, $numberPackageCarried: Int!, $safetyEquipmentUsed: String!) {
  createAccident(name: $name, using_safety: $usingSafety, safety_failed: $safetyFailed, number_package_carried: $numberPackageCarried, safety_equipment_used: $safetyEquipmentUsed) {
    id
    name
    using_safety
    safety_failed
    number_package_carried
    safety_equipment_used
    deleted
  }
}
`;

export { SIGNUP, LOGIN, CREATEACCIDENT }