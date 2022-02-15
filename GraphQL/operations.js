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

    managers {
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
      manager {
        id
        firstname
        lastname
        email
        phoneNumber
        profilePick
      }
    }

    chatrooms {
      id
      createdAt
      chatroomName
      guests
      chatroomOwner
      managers {
        id
        role
        firstname
        lastname
        profilePick
        phoneNumber
      }
      owner {
        id
        firstname
        lastname
        profilePick
        phoneNumber
      }
      messages {
        id
        createdAt
        content
        from
        visable
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

    managers {
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
      manager {
        id
        firstname
        lastname
        email
        phoneNumber
        profilePick
      }
    }

    chatrooms {
      id
      createdAt
      chatroomName
      guests
      chatroomOwner
      managers {
        id
        role
        firstname
        lastname
        profilePick
        phoneNumber
      }
      owner {
        id
        firstname
        lastname
        profilePick
        phoneNumber
      }
      messages {
        id
        createdAt
        content
        from
        visable
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
const DRIVERSGETSHIFTPLANNER = gql`
  query Query {
  driverGetShiftPlaner {
    id
    createdAt
    sundayDate
    sundayHours
    mondayDate
    mondayHours
    tuesdayDate
    tuesdayHours
    wednesdayDate
    wednesdayHours
    thursdayDate
    thursdayHours
    fridayDate
    fridayHours
    saturdayDate
    saturdayHours
    phoneId
    deviceId
    vehicleId
    cxNumber
    message
  }
}
`
const DRIVERSENDMESSAGE = gql`
mutation Mutation($chatroomId: String!, $content: String!) {
  driverSendMessage(chatroomId: $chatroomId, content: $content) {
    chatroom {
      id
      createdAt
      chatroomName
      guests
      chatroomOwner
      owner {
        id
        firstname
        lastname
        phoneNumber
        profilePick
      }
      managers {
        id
        role
        firstname
        lastname
        phoneNumber
        profilePick
      }
      drivers {
        id
        firstname
        lastname
        email
        phoneNumber
        role
      }
      messages {
        id
        createdAt
        content
        from
        visable
        reported
        reportedBy
      }
    }
  }
}
`
const DRIVERCREATECHATROOM = gql`
mutation Mutation($guests: [JSON]!, $chatroomName: String!) {
  driverCreateChatroom(guests: $guests, chatroomName: $chatroomName) {
    id
    createdAt
    guests
    chatroomName
    chatroomOwner
    driverJoinOnSignUp
    messages {
      id
      createdAt
      content
      from
      visable
      reported
      reportedBy
    }
    managers {
      id
      role
      firstname
      lastname
      profilePick
      phoneNumber
    }
    owner {
      id
      role
      firstname
      lastname
      email
      profilePick
      phoneNumber
    }
    drivers {
      id
      firstname
      lastname
      email
      phoneNumber
      profilePick
    }
  }
}
`
const DYNAMICREMOVEDRIVERFROMCHATROOM = gql`
mutation Mutation($role: String!, $chatroomId: String!, $guestId: String!) {
  dynamicRemoveDriverFromChatroom(role: $role, chatroomId: $chatroomId, guestId: $guestId) {
    id
  }
}
`
const GETDRIVERCHATROOMS = gql`
  query Query {
    chatrooms {
      id
      createdAt
      chatroomName
      guests
      chatroomOwner
      managers {
        id
        role
        firstname
        lastname
        profilePick
        phoneNumber
      }
      owner {
        id
        firstname
        lastname
        profilePick
        phoneNumber
      }
      messages {
        id
        createdAt
        content
        from
        visable
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
  GETDRIVERSFORDSPFORTEAM,
  GETDRIVERSFORSCORECARDQUALITY,
  GETNOTIFIED,
  GETNOTIFIEDMESSAGES,
  DRIVERACKNOWLEDGEFEEDBACKMESSAGE,
  DRIVERSGETDRIVERSFROMDSP,
  DRIVERSGETSHIFTPLANNER,
  DRIVERSENDMESSAGE,
  DRIVERCREATECHATROOM,
  DYNAMICREMOVEDRIVERFROMCHATROOM,
  GETDRIVERCHATROOMS
}







