import "react-native-gesture-handler"
import React, { useState } from 'react';
import * as Sharing from 'expo-sharing';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { AppStyles } from './Styles/AppStyles';
import { RecoilRoot } from 'recoil';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from 'apollo-link-http';
import LandingPage from './Pages/LandingPage/Landing'
import Home from './Pages/HomePage/Home'
import { NativeRouter, Route, Switch } from 'react-router-native';
import stateChange from './Hooks/handleToken'

import PersonalScoreCard from "./Pages/ScoreCardPage/ScoreCardComponents/PersonalScoreCard";
import ScoreCard from './Pages/ScoreCardPage/ScoreCard'

import ShiftLanding from "./Pages/ShiftPlannerPage/ShiftLanding";
import ShiftPlanner from './Pages/ShiftPlannerPage/ShiftPlanner'
import ReportAnAccident from './Pages/ReportAnAccidentPage/ReportAnAccident'
import Reporting from './Pages/ReportingPage/Reporting'
import Productivity from './Pages/ProductivityPage/Productivity'
import Communication from './Pages/CommunicationPage/Communication'
import Analytics from './Pages/AnalyticsPage/Analytics'
import Settings from './Pages/SettingsPage/Settings'
import AccountInformation from './Pages/SettingsPage/SettingsComponents/AccountInformation'
import AccountSettings from './Pages/SettingsPage/SettingsComponents/AccountSettings'
import CreateOrAdd from './Pages/ReportAnAccidentPage/CreateOrAdd'
import ReportCollision from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportCollision'
import ReportInjuryAccident from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportInjuryAccident'
import ReportPropertyAccident from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportPropertyAccident'
import ReportHitPerson from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportHitPerson'
import ReportInjuryReport from './Pages/ReportAnAccidentPage/TypesOfAccidents/ReportInjuryReport'
import BeforeWeBegin from './Pages/ReportAnAccidentPage/BeforeWeBegin'
import LeadershipNotified from './Pages/ReportAnAccidentPage/LeadershipNotified'
import PoliceContacted from './Pages/ReportAnAccidentPage/PoliceContacted'
import PleaseRemember from './Pages/ReportAnAccidentPage/PleaseRemember'
import EditAccountInformation from './Pages/SettingsPage/SettingsComponents/EditAccountInformation'
import ViewAccidents from './Pages/SettingsPage/SettingsComponents/ViewAccidents'
import Banner from './Global/Banner';
import Quality from './Pages/ScoreCardPage/ScoreCardComponents/Quality'
// import SafetyAndCompliance from './Pages/ScoreCardPage/ScoreCardComponents/SafetyAndCompliance'
// import Team from './Pages/ScoreCardPage/ScoreCardComponents/Team'
import Notifications from './Pages/NotificationPage/Notification'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Roster from './Pages/Roster/Roster'
import Inspection from './Pages/InspectionPage/Inspection'

let state;

// Create HttpLink for Apollo
const httpLink = createHttpLink({
	uri: 'http://192.168.1.62:5001/graphql'
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
  const [loggedIn, setloggedIn] = useState(false)

	const handleLoggedIn = () => {
		state = stateChange('')
		setloggedIn(!loggedIn)
	}

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <PaperProvider>
            <View style={AppStyles.container}>

              {/* {loggedIn === true ? (<Banner handleLoggedIn={handleLoggedIn} />) : null} */}

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

                <Stack.Screen name='inspection'>
                  {props => <Inspection />}
                </Stack.Screen>

                <Stack.Screen name='leaderboards'>
                  {props => <ScoreCard />}
                </Stack.Screen>

                <Stack.Screen name='account_information'>
                  {props => <AccountInformation />}
                </Stack.Screen>

                <Stack.Screen name='messages'>
                  {props => <Communication />}
                </Stack.Screen>

                <Stack.Screen name='admin_messages'>
                  {props => <Communication />}
                </Stack.Screen>

                <Stack.Screen name='shift_planner'>
                  {props => <ShiftLanding />}
                </Stack.Screen>

                <Stack.Screen name='roster'>
                  {props => <Roster />}
                </Stack.Screen>

                <Stack.Screen name='settings'>
                  {props => <Settings />}
                </Stack.Screen>

                <Stack.Screen name='reporting'>
                  {props => <Reporting />}
                </Stack.Screen>

                <Stack.Screen name='view_notifications'>
                  {props => <Notifications />}
                </Stack.Screen>

                <Stack.Screen name='leadership_notified'>
                  {props => <LeadershipNotified />}
                </Stack.Screen>

                <Stack.Screen name='productivity'>
                  {props => <Productivity />}
                </Stack.Screen>

                <Stack.Screen name='quality'>
                  {props => <Quality />}
                </Stack.Screen>

                {/* <Stack.Screen name='safety_and_compliance'>
                  {props => <SafetyAndCompliance />}
                </Stack.Screen>

                <Stack.Screen name='team'>
                  {props => <Team />}
                </Stack.Screen> */}

                <Stack.Screen name='view_accidents'>
                  {props => <ViewAccidents />}
                </Stack.Screen>

                <Stack.Screen name='edit_account_information'>
                  {props => <EditAccountInformation />}
                </Stack.Screen>

                <Stack.Screen name='account_settings'>
                  {props => <AccountSettings />}
                </Stack.Screen>
            
              </Stack.Navigator>
            </View>
          </PaperProvider>
        </RecoilRoot>
      </ApolloProvider>
    </NavigationContainer>
  );
}
