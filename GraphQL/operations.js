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
    token
    id
    createdAt
    role
    firstname
    lastname
    email
    phoneNumber
    profilePick
    transporterId
    muted
    locked
    deleted
    notified
    owner {
      id
      firstname
      lastname
      email
      phoneNumber
      profilePick
    }
    accidents {
      id
      createdAt
      name
      date
      time
      location
      amazon_logo
      vehicleId
      number_packages_carried
      police_report_information
      weather
      general_pictures
      rushed_prior
      extra_info
      distracted
      actions_before_accidents
      deleted
      unsafe_conditions
      filled
      collisionAccident {
        id
        specific_pictures
        contact_info
        extra_info
      }
      propertyAccident {
        id
        address
        object_hit
        specific_pictures
        safety_equipment
        contact_information
        extra_info
      }
      injuryAccident {
        id
        medical_attention
        immediate_attention
        injury
        contact_info
        specific_pictures
        pain_level
        extra_info
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
      vehicle_number
      amazon_logo
    }
    notifiedMessages {
      id
      createdAt
      read
      content
      from
      type
      manager {
        id
        firstname
        lastname
        phoneNumber
        profilePick
        email
      }
    }
    dsp {
      id
      createdAt
      name
      shortcode
      timeZone
      seatbeltLimits
      ficoLimits
      speedingLimits
      distractionLimits
      followLimits
      signalLimits
      deliveryCompletionRateLimits
      scanComplianceLimits
      callComplianceLimits
      photoOnDeliveryLimits
      deliveryNotRecievedLimits
      topCardLimits
      autoSend
      smallCardLimits
      feedbackNotifications
      accountStanding
      paid
    }
    weeklyReport {
      id
      createdAt
      date
      hadAccident
      feedbackMessageSent
      feedbackMessage
      feedbackStatus
      acknowledged
      acknowledgedAt
      rank
      tier
      delivered
      keyFocusArea
      fico
      speedingEventRate
      seatbeltOffRate
      distractionsRate
      signalViolationsRate
      followingDistanceRate
      deliveryCompletionRate
      deliveredAndRecieved
      photoOnDelivery
      scanCompliance
      callCompliance
      attendedDeliveryAccuracy
      dnr
      podOpps
      ccOpps
      netradyne
      defects
      deliveryAssociate
      customerDeliveryFeedback
      hasManyAccidents
      customerDeliveryFeedback
      belongsToTeam
      attendence
      productivity
    }
    chatrooms {
      id
      createdAt
      chatroomName
      guests
      chatroomOwner
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
    shiftPlanners {
      id
      createdAt
      sundayDate
      sundayHours
      mondayDate
      mondayHours
      tuesdayHours
      tuesdayDate
      wednesdayDate
      wednesdayHours
      thursdayDate
      thursdayHours
      fridayDate
      fridayHours
      saturdayDate
      saturdayHours
      weekStartDate
      weekEndDate
      phoneId
      vehicleId
      cxNumber
      deviceId
      message
    }
    accidents {
      id
      name
      date
      time
      location
      amazon_logo
      vehicleId
      number_packages_carried
      police_report_information
      general_pictures
      weather
      rushed_prior
      distracted
      extra_info
      actions_before_accidents
      unsafe_conditions
      collisionAccident {
        id
        specific_pictures
        contact_info
        extra_info
        injuryAccident {
          id
          medical_attention
          immediate_attention
          injury
          contact_info
          specific_pictures
          pain_level
          extra_info
        }
      }
      injuryAccident {
        id
        medical_attention
        immediate_attention
        injury
        contact_info
        specific_pictures
        pain_level
        extra_info
      }
      propertyAccident {
        id
        address
        object_hit
        specific_pictures
        safety_equipment
        contact_information
        extra_info
      }
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
    token
    id
    createdAt
    role
    firstname
    lastname
    email
    phoneNumber
    profilePick
    transporterId
    muted
    locked
    deleted
    notified
    owner {
      id
      firstname
      lastname
      email
      phoneNumber
      profilePick
    }
    accidents {
      id
      createdAt
      name
      date
      time
      location
      amazon_logo
      vehicleId
      number_packages_carried
      police_report_information
      weather
      general_pictures
      rushed_prior
      extra_info
      distracted
      actions_before_accidents
      deleted
      unsafe_conditions
      filled
      collisionAccident {
        id
        specific_pictures
        contact_info
        extra_info
      }
      propertyAccident {
        id
        address
        object_hit
        specific_pictures
        safety_equipment
        contact_information
        extra_info
      }
      injuryAccident {
        id
        medical_attention
        immediate_attention
        injury
        contact_info
        specific_pictures
        pain_level
        extra_info
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
      vehicle_number
      amazon_logo
    }
    notifiedMessages {
      id
      createdAt
      read
      content
      from
      type
      manager {
        id
        firstname
        lastname
        phoneNumber
        profilePick
        email
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
      photoOnDeliveryLimits
      deliveryNotRecievedLimits
      topCardLimits
      smallCardLimits
      feedbackNotifications
      paid
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
      speedingEventRate
      seatbeltOffRate
      distractionsRate
      followingDistanceRate
      signalViolationsRate
      deliveryCompletionRate
      deliveredAndRecieved
      photoOnDelivery
      scanCompliance
      callCompliance
      attendedDeliveryAccuracy
      dnr
      podOpps
      ccOpps
      netradyne
      defects
      deliveryAssociate
      customerDeliveryFeedback
      hasManyAccidents
      belongsToTeam
      attendence
      productivity
    }
    chatrooms {
      id
      createdAt
      chatroomName
      guests
      chatroomOwner
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
    shiftPlanners {
      id
      createdAt
      sundayDate
      sundayHours
      mondayDate
      mondayHours
      thursdayDate
      wednesdayHours
      wednesdayDate
      tuesdayHours
      tuesdayDate
      thursdayHours
      fridayDate
      fridayHours
      saturdayDate
      saturdayHours
      weekStartDate
      weekEndDate
      phoneId
      deviceId
      vehicleId
      cxNumber
      message
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

const DRIVERCREATEACCIDENT = gql`
  mutation Mutation($name: String!, $date: String!, $time: String!, $location: String!) {
  driverCreateAccident(name: $name, date: $date, time: $time, location: $location) {
    id
    name
    date
    time
    location
  }
}
`

const DRIVERCREATECOLLISIONACCIDENT = gql`
  mutation DriverCreateCollisionAccident($accidentId: String!, $specificPictures: JSON!, $contactInfo: JSON!, $extraInfo: String!) {
  driverCreateCollisionAccident(accidentId: $accidentId, specific_pictures: $specificPictures, contact_info: $contactInfo, extra_info: $extraInfo) {
    id
    specific_pictures
    contact_info
    extra_info
  }
}`

const DRIVERCREATEINJURYACCIDENT = gql`
  mutation Mutation($medicalAttention: String!, $immediateAttention: String!, $injury: String!, $contactInfo: JSON!, $specificPictures: JSON!, $painLevel: Int!, $extraInfo: String!) {
  driverCreateInjuryAccident(medical_attention: $medicalAttention, immediate_attention: $immediateAttention, injury: $injury, contact_info: $contactInfo, specific_pictures: $specificPictures, pain_level: $painLevel, extra_info: $extraInfo) {
    id
    medical_attention
    immediate_attention
    injury
    contact_info
    specific_pictures
    pain_level
    extra_info
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
  DRIVERCREATEACCIDENT,
  DRIVERCREATEINJURYACCIDENT,
  DRIVERCREATECOLLISIONACCIDENT,
  DYNAMICREMOVEDRIVERFROMCHATROOM,
  GETDRIVERCHATROOMS
}







