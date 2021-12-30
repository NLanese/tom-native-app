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
  signinDriver(email: $email, password: $password) {
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
    adminPhonenumber
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

const GETDRIVERDATA = gql`
  query Query {
  getDriver {
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

const UPDATEDRIVER = gql`
  mutation UpdateDriver($updateDriver: UpdateDriver) {
  updateDriver(updateDriver: $updateDriver) {
    firstname
    email
  }
}
`

export { SIGNUP, LOGIN, CREATEACCIDENT, GETDRIVERDATA, UPDATEDRIVER }
