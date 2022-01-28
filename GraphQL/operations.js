import { gql } from '@apollo/client';

/* ------------------------------ USERS ------------------------------ */

const SIGNUP = gql`
	mutation Mutation($signupInput: SignupInput!) {
  signupDriver(signupInput: $signupInput) {
    id
    email
  }
}
`;
const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
  driverSignIn(email: $email, password: $password) {
    id
    createdAt
    role
    token
    firstname
    lastname
    email
    password
    phoneNumber
    profilePick
    transporterId
    locked
    deleted
    notified
    owner {
      id
      firstname
      lastname
      email
      password
      phoneNumber
    }
    accidents {
      id
      driver {
        id
      }
      name
      location
      hitPerson {
        id
      }
      collision {
        id
      }
      injuryAccident {
        id
      }
      propertyAccident {
        id
      }
      injuryReport {
        id
      }
    }
    admins {
      id
      firstname
      lastname
      email
      phoneNumber
      profilePick
    }
    vehicle {
      id
      amazon_logo
      vehicle_number
    }
    notifiedMessages {
      id
      read
      createdAt
      content
      from
      type
    }
    messages {
      id
      createdAt
      content
      from
      admin {
        id
        firstname
        lastname
        email
        phoneNumber
        profilePick
      }
    }
    dsp {
      id
      createdAt
      name
      shortcode
      timeZone
      ficoLimits
      seatbeltLimits
      speedingLimits
      distractionLimits
      followLimits
      signalLimits
      deliveryCompletionRateLimits
      scanComplianceLimits
      callComplianceLimits
      deliveryNotRecievedLimits
      photoOnDeliveryLimits
      topCardLimits
      smallCardLimits
      feedbackNotifications
    }
    weeklyReport {
      id
      createdAt
      date
      hadAccident
      feedbackMessage
      feedbackMessageSent
      feedbackStatus
      acknowledged
      acknowledgedAt
      rank
      tier
      delivered
      keyFocusArea
      fico
      seatbeltOffRate
      speedingEventRate
      distractionsRate
      followingDistanceRate
      signalViolationsRate
      deliveryCompletionRate
      deliveredAndRecieved
      photoOnDelivery
      callCompliance
      scanCompliance
      attendedDeliveryAccuracy
      dnr
      podOpps
      ccOpps
      netradyne
      deliveryAssociate
      defects
      customerDeliveryFeedback
      hasManyAccidents
      belongsToTeam
      attendence
      productivity
    }
  }
}
`;
const UPDATEDRIVER = gql`
  mutation UpdateDriver($updateDriver: UpdateDriver) {
  updateDriver(updateDriver: $updateDriver) {
    firstname
    lastname
    email
    phoneNumber
    password
  }
}
`
// const NOTIFIEDTOFALSE = gql`
//   mutation notifiedToFalse(){
//     notifiedToFalse($)
//   }
// `
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
    createdAt
    role
    token
    firstname
    lastname
    email
    password
    phoneNumber
    profilePick
    transporterId
    locked
    deleted
    notified
    owner {
      id
      firstname
      lastname
      email
      phoneNumber
    }
    accidents {
      id
      name
      createdAt
    }
    admins {
      id
      firstname
      email
      lastname
      phoneNumber
      locked
      deleted
    }
    vehicle {
      id
      vehicle_number
    }
    messages {
      id
      createdAt
      content
      from
      admin {
        id
        firstname
        lastname
        email
        phoneNumber
      }
    }
    NotifiedMessages {
      id
      createdAt
      read
      content
      from
      type
      driverId
      adminId
    }
    dsp {
      createdAt
      id
      name
      shortcode
      timeZone
      ficoLimits
      seatbeltLimits
      speedingLimits
      distractionLimits
      followLimits
      deliveryCompletionRateLimits
      signalLimits
      scanComplianceLimits
      callComplianceLimits
      deliveryNotRecievedLimits
      photoOnDeliveryLimits
      topCardLimits
      smallCardLimits
      feedbackNotifications
      autoSend
      paid
      driver {
        id
        firstname
        lastname
        email
        phoneNumber
      }
    }
    weeklyReport {
      id
      createdAt
      date
      hadAccident
      feedbackMessage
      feedbackStatus
      acknowledged
      acknowledgedAt
      rank
      tier
      delivered
      keyFocusArea
      fico
      seatbeltOffRate
      speedingEventRate
      distractionsRate
      followingDistanceRate
      signalViolationsRate
      deliveryCompletionRate
      deliveryNotRecieved
      photoOnDelivery
      callCompliance
      scanCompliance
      attendedDeliveryAccuracy
      netradyne
      deliveryAssociate
      defects
      customerDeliveryFeedback
      hasManyAccidents
      belongsToTeam
      attendence
      productivity
    }
  }
}
`
const GETDRIVERSFORDPSFORSAFETYANDCOMPLIANCE = gql`
  query Query {
  getDriversForDspForSafetyAndCompliance {
    id
    createdAt
    firstname
    lastname
    email
    phoneNumber
    employeeId
    fico
    netradyne
    delivery_associate
    seatbelt_and_speeding
    defects
    customer_delivery_feedback
    delivered_and_recieved
    delivery_completion_rate
    photo_on_delivery
    call_compliance
    scan_compliance
    has_many_accidents
    belongs_to_team
    dsp_name
    dsp_shortcode
  }
}
`
const GETDRIVERSFORDSPFORTEAM = gql`
  query Query {
  getDriversForDspForTeam {
    id
    createdAt
    firstname
    lastname
    email
    phoneNumber
    employeeId
    fico
    netradyne
    delivery_associate
    seatbelt_and_speeding
    defects
    customer_delivery_feedback
    delivered_and_recieved
    delivery_completion_rate
    photo_on_delivery
    call_compliance
    scan_compliance
    has_many_accidents
    belongs_to_team
    dsp_name
    dsp_shortcode
  }
}
`
const GETDRIVERSFORSCORECARDQUALITY = gql`
  query Query {
  getDriversForScorecardQuality {
    id
    createdAt
    firstname
    lastname
    email
    phoneNumber
    employeeId
    fico
    netradyne
    delivery_associate
    seatbelt_and_speeding
    defects
    customer_delivery_feedback
    delivered_and_recieved
    delivery_completion_rate
    photo_on_delivery
    call_compliance
    scan_compliance
    has_many_accidents
    belongs_to_team
    dsp_name
    dsp_shortcode
  }
}
`
const GETNOTIFIED = gql`
  query Query {
  getDriver {
    notified
  }
}`
const GETNOTIFIEDMESSAGES = gql`
  query Query {
  getNotifiedMessages {
    id
    createdAt
    read
    content
    from
    type
  }
}`
const GETDRIVERMESSAGESWITHADMIN = gql`
  query Query {
  getMessageWithAdmin {
    id
    createdAt
    content
    from
  }
}
`
const SENDMESSAGETOADMIN = gql`
  mutation Mutation($content: String!) {
      sendMessageToAdmin(content: $content) {
        id
    }
}
`
const DRIVERACKNOWLEDGEFEEDBACKMESSAGE = gql`
mutation Mutation($reportId: String!) {
  driverAcknowledgeFeedbackMessage(reportId: $reportId) {
    id
  }
}
`
const DRIVERSGETDRIVERSFROMDSP = gql`
query Query {
  driverGetDriversFromDsp {
    drivers {
      id
      firstname
      lastname
      profilePick
      createdAt
      weeklyReport {
        rank
        tier
        delivered
        fico
        seatbeltOffRate
        speedingEventRate
        distractionsRate
        followingDistanceRate
        signalViolationsRate
        deliveryCompletionRate
        deliveredAndRecieved
        photoOnDelivery
        callCompliance
        scanCompliance
        attendedDeliveryAccuracy
        dnr
        podOpps
        ccOpps
        netradyne
        defects
        customerDeliveryFeedback
      }
    }
  }
}
`



export {  
  SIGNUP, 
  LOGIN, 
  CREATEACCIDENT, 
  GETDRIVERDATA, 
  UPDATEDRIVER, 
  GETDRIVERSFORDPSFORSAFETYANDCOMPLIANCE,
  GETDRIVERSFORDSPFORTEAM,
  GETDRIVERSFORSCORECARDQUALITY,
  GETNOTIFIED,
  GETNOTIFIEDMESSAGES,
  GETDRIVERMESSAGESWITHADMIN,
  SENDMESSAGETOADMIN,
  DRIVERACKNOWLEDGEFEEDBACKMESSAGE,
  DRIVERSGETDRIVERSFROMDSP
}







