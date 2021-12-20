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

export { SIGNUP, LOGIN }