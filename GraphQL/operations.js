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
  mutation Mutation($name: String!, $location: String!) {
  createAccident(name: $name, location: $location) {
    id
    name
    location
  }
}
`;

const GET_USER_DATA = gql`
  query Query {
  getUser {
    id
    firstname
    lastname
    email
    phoneNumber
    employeeId
    adminFirstname
    adminLastname
    adminUsername
    adminEmail
  }
}
`

export { SIGNUP, LOGIN, CREATEACCIDENT, GET_USER_DATA }