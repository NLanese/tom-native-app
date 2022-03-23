import { gql } from '@apollo/client';
import { getOperationDefinition } from '@apollo/client/utilities';

//////////////////////////////////////////
//                                      //
//         LANDING MUTATIONS            //   
//                                      //
//////////////////////////////////////////
const SIGNUP = gql`
mutation Mutation($email: String!, $password: String!, $firstname: String!, $lastname: String!, $phoneNumber: String!, $signUpToken: String!) {
  driverSignUp(email: $email, password: $password, firstname: $firstname, lastname: $lastname, phoneNumber: $phoneNumber, signUpToken: $signUpToken) {
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

const LOGIN = gql`
  mutation DriverSignIn($email: String!, $password: String!) {
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
  }
}
`;

const IS_SERVER_READY = gql`
  query Query {
  isServerReady
}
`

//////////////////////////////////////////
//                                      //
//        ACCIDENT MUTATIONS            //   
//                                      //
//////////////////////////////////////////

const DRIVER_CREATE_ACCIDENT = gql`
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
const DRIVER_CREATE_COLLISION_ACCIDENT = gql`
  mutation Mutation($accidentId: String!, $specific_pictures: JSON!, $contact_info: JSON!, $collision_report: JSON!, $extra_info: String!) {
    driverCreateCollisionAccident(accidentId: $accidentId, specific_pictures: $specific_pictures, contact_info: $contact_info, collision_report: $collision_report, extra_info: $extra_info) {
    id
  }
}
`
const DRIVER_CREATE_PROPERTY_ACCIDENT = gql`
mutation Mutation($accidentId: String!, $contact_info: JSON!, $damage_report: JSON!, $types_of_damage: JSON!, $defective_equip: JSON, $safety_equip: JSON, $specific_pictures: JSON, $package_report: JSON $extra_info: JSON) {
  driverCreatePropertyAccident(accidentId: $accidentId, contact_info: $contact_info, damage_report: $damage_report, types_of_damage: $types_of_damage, defective_equip: $defective_equip, safety_equip: $safety_equip, specific_pictures: $specific_pictures, package_report: $package_report, extra_info: $extra_info) {
    id
  }
}
`
const DRIVER_CREATE_INJURY_ACCIDENT = gql`
mutation Mutation($accidentId: String!, $contact_info: JSON!, $injured_areas: JSON!, $injury_report: JSON!, $pain_level: String, $specific_pictures: JSON, $extra_info: String, $collisionAccidentId: String) {
  driverCreateInjuryAccident(accidentId: $accidentId, contact_info: $contact_info, injured_areas: $injured_areas, injury_report: $injury_report, pain_level: $pain_level, specific_pictures: $specific_pictures, extra_info: $extra_info, collisionAccidentId: $collisionAccidentId) {
    id
  }
}
`








const UPDATEDRIVER = gql`
  mutation UpdateDriver($updateDriver: UpdateDriver) {
  updateDriver(updateDriver: $updateDriver) {
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
`

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
const DYNAMICUPDATECHATROOM = gql`
  mutation DynamicUpdateChatroom($role: String!, $chatroomId: String!, $name: String!) {
  dynamicUpdateChatroom(role: $role, chatroomId: $chatroomId, name: $name) {
    id
    createdAt
    chatroomName
    guests
    chatroomOwner
    messages {
      id
      createdAt
      content
      visable
      from
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
const DYNAMICADDDRIVERTOCHAT = gql`
  mutation DynamicUpdateChatroom($role: String!, $guestId: String!, $chatroomId: String!) {
  dynamicAddDriverToChatroom(role: $role, guestId: $guestId, chatroomId: $chatroomId) {
    id
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




const DRIVERUPDATEACCIDENT = gql`
  mutation Mutation($accidentId: String!, $amazonLogo: Boolean, $vehicleId: String, $numberPackagesCarried: Int, $policeReportInformation: JSON, $generalPictures: JSON, $weather: String, $rushedPrior: Boolean, $distracted: Boolean, $extraInfo: String, $actionsBeforeAccidents: JSON, $unsafeCoditions: JSON) {
  driverUpdateAccident(accidentId: $accidentId, amazon_logo: $amazonLogo, vehicleId: $vehicleId, number_packages_carried: $numberPackagesCarried, police_report_information: $policeReportInformation, general_pictures: $generalPictures, weather: $weather, rushed_prior: $rushedPrior, distracted: $distracted, extra_info: $extraInfo, actions_before_accidents: $actionsBeforeAccidents, unsafe_coditions: $unsafeCoditions) {
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
    general_pictures
    weather
    rushed_prior
    distracted
    extra_info
    actions_before_accidents
    unsafe_conditions
  }
}
`


export {  
  SIGNUP, 
  LOGIN, 
  IS_SERVER_READY,

  DRIVER_CREATE_COLLISION_ACCIDENT,
  DRIVER_CREATE_INJURY_ACCIDENT,
  DRIVER_CREATE_ACCIDENT,
  DRIVER_CREATE_PROPERTY_ACCIDENT,


  GETDRIVERDATA, 
  UPDATEDRIVER, 
  GETDRIVERSFORDSPFORTEAM,
  GETNOTIFIED,
  GETNOTIFIEDMESSAGES,
  DRIVERACKNOWLEDGEFEEDBACKMESSAGE,
  DRIVERSGETDRIVERSFROMDSP,
  DRIVERSGETSHIFTPLANNER,
  DRIVERSENDMESSAGE,
  DYNAMICADDDRIVERTOCHAT,
  DRIVERCREATECHATROOM,
  DYNAMICUPDATECHATROOM,
  DRIVERUPDATEACCIDENT,
  DYNAMICREMOVEDRIVERFROMCHATROOM,
  GETDRIVERCHATROOMS
}
