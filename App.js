import "react-native-gesture-handler"
import React, { useState } from 'react';
import * as Sharing from 'expo-sharing';
import { useFonts } from 'expo-font' 


import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Text } from '@ui-kitten/components';
import { default as theme } from './theme.json'; // <-- Import app theme
import { default as mapping } from './mapping.json'; // <-- Import app mapping
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { Provider as PaperProvider } from 'react-native-paper';
import { RecoilRoot } from 'recoil';

import { View } from 'react-native';
import { useEffect } from "react";

import { AppStyles } from './Styles/AppStyles';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from 'apollo-link-http';

import LandingPage from './Pages/LandingPage/Landing'
import Home from './Pages/HomePage/Home'
import stateChange from './Hooks/handleToken'

import PersonalScoreCard from "./Pages/ScoreCardPage/ScoreCardComponents/PersonalScoreCard";
import ScoreCard from './Pages/ScoreCardPage/ScoreCard'

import ShiftLanding from "./Pages/ShiftPlannerPage/ShiftLanding";
import ShiftPlanner from './Pages/ShiftPlannerPage/ShiftPlanner'

import Chatrooms from './Pages/CommunicationPage/Chatrooms'
import MessageThread from "./Pages/CommunicationPage/MessageThread";
import Contacts from "./Pages/CommunicationPage/CommunicationComponents/Contacts"

import Settings from './Pages/SettingsPage/Settings'
import AccountInformation from './Pages/SettingsPage/SettingsComponents/AccountInformation'
import AccountSettings from './Pages/SettingsPage/SettingsComponents/AccountSettings'

// import CreateOrAdd from './Pages/ReportAnAccidentPage/CreateOrAdd'
// import ReportCollision from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportCollision'
// import ReportInjuryAccident from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportInjuryAccident'
// import ReportPropertyAccident from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportPropertyAccident'
// import ReportHitPerson from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportHitPerson'
// import ReportInjuryReport from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportInjuryReport'
// import BeforeWeBegin from './Pages/ReportAnAccidentPage/BeforeWeBegin'
// import LeadershipNotified from './Pages/ReportAnAccidentPage/LeadershipNotified'
// import PoliceContacted from './Pages/ReportAnAccidentPage/PoliceContacted'
// import PleaseRemember from './Pages/ReportAnAccidentPage/PleaseRemember'
import EditAccountInformation from './Pages/SettingsPage/SettingsComponents/EditAccountInformation'
import ViewAccidents from './Pages/SettingsPage/SettingsComponents/ViewAccidents'
import Quality from './Pages/ScoreCardPage/ScoreCardComponents/Quality'
import Notifications from './Pages/NotificationPage/Notification'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Roster from './Pages/Roster/Roster'
import Inspection from './Pages/InspectionPage/Inspection'

import ReportAnAccidentLanding from './Pages/ReportAnAccidentPage/Basic/ReportAnAccidentLanding'
import ManagementNotified from "./Pages/ReportAnAccidentPage/Basic/ManagementNotified/ManagementNotified"
import PoliceNotified from "./Pages/ReportAnAccidentPage/Basic/PoliceNotified/PoliceNotified"
import CreateAccident from "./Pages/ReportAnAccidentPage/Basic/CreateAccident"

import CheckCollisionAccident from "./Pages/ReportAnAccidentPage/Collision/CheckCollisionAccident"
import CreateCollisionAccident from "./Pages/ReportAnAccidentPage/Collision/CreateCollisionAccident"
import CollisionSpecificPictures from "./Pages/ReportAnAccidentPage/Collision/CollisionSpecificPictures"
import CollisionAccidentInformation from "./Pages/ReportAnAccidentPage/Collision/CollisionAccidentInformation"
import CollisionExtraInfo from "./Pages/ReportAnAccidentPage/Collision/CollisionExtraInfo"

import CollisionInjuryCheck from "./Pages/ReportAnAccidentPage/Collision/INJURY/CollisionInjuryCheck"
import CreateCollisionInjuryReport from "./Pages/ReportAnAccidentPage/Collision/INJURY/CreateCollisionInjuryReport"
import CollisionInjurySpecificPictures from "./Pages/ReportAnAccidentPage/Collision/INJURY/CollisionInjurySpecificPicture"
import CollisionInjuryReportInformation from "./Pages/ReportAnAccidentPage/Collision/INJURY/CollisionInjuryReportInformation"
import CollisionInjuryReportExtraInfo from "./Pages/ReportAnAccidentPage/Collision/INJURY/CollisionInjuryReportExtraInfo";
import CollisionInjuryCheckAgain from "./Pages/ReportAnAccidentPage/Collision/INJURY/CollisionInjuryCheckAgain";

import CheckPropertyAccident from "./Pages/ReportAnAccidentPage/Property/CheckPropertyAccident";
import PropertySpecificPictures from "./Pages/ReportAnAccidentPage/Property/PropertySpecificPictures"
import PropertyAccidentInformation from "./Pages/ReportAnAccidentPage/Property/PropertyAccidentInformation"
import PropertyAccidentContactInformation from "./Pages/ReportAnAccidentPage/Property/PropertyAccidentContactInformation"
import PropertyAccidentSafetyEquipment from "./Pages/ReportAnAccidentPage/Property/PropertyAccidentSafetyEquipment"

import CheckUserInjury from "./Pages/ReportAnAccidentPage/UserInjury/CheckUserInjury";

import PropertyAccidentExtraInformation from "./Pages/ReportAnAccidentPage/Property/PropertyAccidentExtraInformation";
import CheckInjuryAccident from "./Pages/ReportAnAccidentPage/Injury/CheckInjuryAccident"


let state;

// Create HttpLink for Apollo
const httpLink = createHttpLink({
	uri: 'http://192.168.1.62:5001/graphql' // KW Studio
  // uri: 'http://192.168.1.203:5001/graphql'     // Home
  // uri: 'http://192.168.1.85:5001/graphql'  // Handheld
	// uri: 'https://warm-retreat-50469.herokuapp.com/graphql'
});

// Auth for token
const authLink = setContext((_, { headers }) => {
	const token = state
	return {
		headers: {
			...headers,
			authorization: token ? `${token}` : ''
		}
	}
})

// Initialize Apollo Client
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    GilroyBlack: require('./assets/fonts/Gilroy-Black.ttf'),
    GilroyBold: require('./assets/fonts/Gilroy-Bold.ttf'),
    GilroyExtraBold: require('./assets/fonts/Gilroy-ExtraBold.ttf'),
    GilroyHeavy: require('./assets/fonts/Gilroy-Heavy.ttf'),
    GilroyLight: require('./assets/fonts/Gilroy-Light.ttf'),
    GilroyMedium: require('./assets/fonts/Gilroy-Medium.ttf'),
    GilroyRegular: require('./assets/fonts/Gilroy-Regular.ttf'),
    GilroySemiBold: require('./assets/fonts/Gilroy-SemiBold.ttf'),
    GilroyThin: require('./assets/fonts/Gilroy-Thin.ttf'),
    GilroyUltraLight: require('./assets/fonts/Gilroy-UltraLight.ttf'),
  })
  const [loggedIn, setloggedIn] = useState(false)

	const handleLoggedIn = () => {
		state = stateChange('')
		setloggedIn(!loggedIn)
	}

  const handleThreadSelection = (chatroom) => {
    setActiveThread(chatroom)
  }

  if(!loaded){
    return null
  }
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
            <PaperProvider>
              <View style={AppStyles.container}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
            
                  {loggedIn === false ? (
                  <Stack.Screen name="/">
                    {props => <LandingPage handleLoggedIn={handleLoggedIn}  />}
                  </Stack.Screen>
                  ) : null}
              
                  <Stack.Screen name="home">
                    {props => <Home {...props} handleLoggedIn={handleLoggedIn} />}
                  </Stack.Screen>

                  <Stack.Screen name='analytics'>
                    {props => <Analytics />}
                  </Stack.Screen>

                  <Stack.Screen name='score_card'>
                    {props => <PersonalScoreCard />}
                  </Stack.Screen>

                  <Stack.Screen name='leaderboards'>
                    {props => <ScoreCard />}
                  </Stack.Screen>

                  <Stack.Screen name='account_information'>
                    {props => <AccountInformation />}
                  </Stack.Screen>

                  <Stack.Screen name='messages'>
                    {props => <Chatrooms {...props} />}
                  </Stack.Screen>

                  <Stack.Screen name='message-thread'>
                    {props => <MessageThread {...props} />}
                  </Stack.Screen>

                  <Stack.Screen name='admin_messages'>
                    {props => <Communication />}
                  </Stack.Screen>

                  <Stack.Screen name='shift_planner'>
                    {props => <ShiftPlanner />}
                  </Stack.Screen>

                  <Stack.Screen name='roster'>
                    {props => <Roster />}
                  </Stack.Screen>

                  <Stack.Screen name='contacts'>
                    {props => <Contacts creating={false} /> }
                  </Stack.Screen>

                  <Stack.Screen name='create-chat'>
                    {props => <Contacts creating={true} />}
                  </Stack.Screen>

                  <Stack.Screen name='settings'>
                    {props => <Settings />}
                  </Stack.Screen>

                  <Stack.Screen name='view_notifications'>
                    {props => <Notifications />}
                  </Stack.Screen>

                  <Stack.Screen name='quality'>
                    {props => <Quality />}
                  </Stack.Screen>

                  <Stack.Screen name='view_accidents'>
                    {props => <ViewAccidents />}
                  </Stack.Screen>

                  <Stack.Screen name='edit_account_information'>
                    {props => <EditAccountInformation />}
                  </Stack.Screen>

                  <Stack.Screen name='account_settings'>
                    {props => <AccountSettings />}
                  </Stack.Screen>

                  <Stack.Screen name='raa_landing'>
                    {props => <ReportAnAccidentLanding />}
                  </Stack.Screen>

                  <Stack.Screen name='management_notified'>
                    {props => <ManagementNotified />}
                  </Stack.Screen>

                  <Stack.Screen name='police_notified'>
                    {props => <PoliceNotified />}
                  </Stack.Screen>

                  <Stack.Screen name="create-an-accident">
                    {props => <CreateAccident />}
                  </Stack.Screen>

                  <Stack.Screen name="check-user-injury">
                    {props => <CheckUserInjury />}
                  </Stack.Screen>

                  <Stack.Screen name="create-injury-report">
                    {props => <CreateCollisionInjuryReport  collision={false}/>}
                  </Stack.Screen>

                  <Stack.Screen name='injury-specific-pictures'>
                    {props => <CollisionInjurySpecificPictures collision={false}/>}
                  </Stack.Screen>

                  <Stack.Screen name='injury-report-information'>
                    {props => <CollisionInjuryReportInformation collision={false}/>}
                  </Stack.Screen>

                  <Stack.Screen name='injury-report-extra-info'>
                    {props => <CollisionInjuryReportExtraInfo collision={false}/>}
                  </Stack.Screen>

                  <Stack.Screen name='injury-check-again'>
                    {props => <CollisionInjuryCheckAgain collision={false}/>}
                  </Stack.Screen>

                  <Stack.Screen name='create-collision-accident'>
                    {props => <CreateCollisionAccident />}
                  </Stack.Screen>

                  <Stack.Screen name='check-collision-accident'>
                    {props => <CheckCollisionAccident />}
                  </Stack.Screen>

                  <Stack.Screen name='collision-specific-pictures'>
                    {props => <CollisionSpecificPictures />}
                  </Stack.Screen>

                  <Stack.Screen name='collision-accident-information'>
                    {props => <CollisionAccidentInformation />}
                  </Stack.Screen>

                  <Stack.Screen name='collision-extra-info'>
                    {props => <CollisionExtraInfo />}
                  </Stack.Screen>

                  <Stack.Screen name='collision-injury-check'>
                    {props => <CollisionInjuryCheck collision={true}/>}
                  </Stack.Screen>

                  <Stack.Screen name='create-collision-injury-report'>
                    {props => <CreateCollisionInjuryReport collision={true}/>}
                  </Stack.Screen>

                  <Stack.Screen name='collision-injury-specific-pictures'>
                    {props => <CollisionInjurySpecificPictures collision={true}/>}
                  </Stack.Screen>

                  <Stack.Screen name='collision-injury-report-information'>
                    {props => <CollisionInjuryReportInformation collision={true}/>}
                  </Stack.Screen>

                  <Stack.Screen name='collision-injury-report-extra-info'>
                    {props => <CollisionInjuryReportExtraInfo collision={true}/>}
                  </Stack.Screen>

                  <Stack.Screen name='collision-injury-check-again'>
                    {props => <CollisionInjuryCheckAgain collision={true}/>}
                  </Stack.Screen>

                  <Stack.Screen name='check-property-accident'>
                    {props => <CheckPropertyAccident />}
                  </Stack.Screen>

                  <Stack.Screen name='property-specific-pictures'>
                    {props => <PropertySpecificPictures />}
                  </Stack.Screen>

                  <Stack.Screen name='property-accident-information'>
                    {props => <PropertyAccidentInformation />}
                  </Stack.Screen>

                  <Stack.Screen name='property-accident-contact-information'>
                    {props => <PropertyAccidentContactInformation />}
                  </Stack.Screen>

                  <Stack.Screen name='property-accident-safety-equipment'>
                    {props => <PropertyAccidentSafetyEquipment />}
                  </Stack.Screen>

                  <Stack.Screen name='property-accident-extra-info'>
                    {props => <PropertyAccidentExtraInformation />}
                  </Stack.Screen>

                  <Stack.Screen name='check-injury-accident'>
                    {props => <CheckInjuryAccident />}
                  </Stack.Screen>

                  <Stack.Screen name='create-injury-accident'>
                    {props => <CreateInjuryAccident />}
                  </Stack.Screen>

                  <Stack.Screen name='injury-specific-pictures'>
                    {props => <InjurySpecificPictures />}
                  </Stack.Screen>

                  <Stack.Screen name='injury-report-information'>
                    {props => <InjuryReportInformation />}
                  </Stack.Screen>

                  <Stack.Screen name='injury-report-extra-info'>
                    {props => <InjuryExtraInformation />}
                  </Stack.Screen>

                  <Stack.Screen name='injury-check-again'>
                    {props => <CheckInjuryAccidentAgain />}
                  </Stack.Screen>

                  <Stack.Screen name='accident-info-continue'>
                    {props => <AccidentInfoContinue />}
                  </Stack.Screen>

                  <Stack.Screen name='report-an-accident-completed'>
                    {props => <ReportAnAccidentCompleted />}
                  </Stack.Screen>

                  <Stack.Screen name='accident-general-pictures'>
                    {props => <AccidentGeneralPictures />}
                  </Stack.Screen>

                  <Stack.Screen name='accident-police-report'>
                    {props => <AccidentPoliceReport />}
                  </Stack.Screen>

                  <Stack.Screen name='accident-extra-information'>
                    {props => <AccidentExtraInformation />}
                  </Stack.Screen>
              
                </Stack.Navigator>
              </View>
            </PaperProvider>
          </ApplicationProvider>
        </RecoilRoot>
      </ApolloProvider>
    </NavigationContainer>
  );
}
