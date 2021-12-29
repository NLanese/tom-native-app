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

const GET_USER_DATA = gql`
query Query {
  getUser {
    id
    role
    firstname
    lastname
    email
    password
    phoneNumber
    token
    employeeId
    adminFirstname
    adminLastname
    adminUsername
    adminEmail
  }
}
# query Query {
#   getUser {
#     id
#     firstname
#     lastname
#     email
#     password
#     phoneNumber
#     employeeId
#     adminId
#     adminFirstname
#     adminLastname
#     adminUsername
#     adminEmail
#     adminAccountStanding
#     accidents {
#       id
#       name
#       using_safety
#       safety_failed
#       number_package_carried
#       safety_equipment_used
#       deleted
#       hitPerson {
#         id
#         accidentId
#         medical_attention
#         vehicle_or_pedestrian
#         previous_damage
#         contact_information
#         injury
#         deleted
#       }
#       thirdParty {
#         id
#         accidentId
#         location
#         deleted
#       }
#       injuryAccident {
#         id
#         self_injured
#         vehicle_number
#         amazon_logo
#         exact_address
#         action_before_accident
#         police_report
#         weather
#         wet_ground
#         slippery_ground
#         extra_info
#         rushed_prior
#         deleted
#         accidentId
#       }
#       propertyAccident {
#         id
#         self_injured
#         vehicle_number
#         amazon_logo
#         exact_address
#         action_before_accident
#         police_report
#         weather
#         wet_ground
#         slippery_ground
#         extra_info
#         rushed_prior
#         deleted
#         accidentId
#       }
#       injuryReport {
#         id
#         immediate_attention
#         late
#         self_injured
#         injury_type
#         other_injured
#         before_injury
#         packages
#         safety_equipment
#         unsafe_conditions
#         pain_level
#         addtional_information
#         deleted
#         accidentId
#       }
#     }
#   }
# }`;


const UPDATE_USER = gql`
  mutation Mutation($firstname: String, $lastname: String, $email: String, $phoneNumber: String){
    updateUser(firstname: $firstname, lastname: $lastname, email: $email, phoneNumber: $phoneNumber){
      id
      firstname
      lastname
      email
      phoneNumber
    }  
  }
`


















export { SIGNUP, LOGIN, CREATEACCIDENT, GET_USER_DATA }