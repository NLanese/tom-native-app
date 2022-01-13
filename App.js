import "react-native-gesture-handler"
import React, { useState } from 'react';
import hidden from './hidden';
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AppStyles } from './Styles/AppStyles';
import { RecoilRoot } from 'recoil';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from 'apollo-link-http';
import LandingPage from './Pages/LandingPage/Landing'
import Home from './Pages/HomePage/Home'
import { NativeRouter, Route, Link, Switch,	NativeModules } from 'react-router-native';
import stateChange from './Hooks/handleToken'
import ScoreCard from './Pages/ScoreCardPage/ScoreCard'
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
import SafetyAndCompliance from './Pages/ScoreCardPage/ScoreCardComponents/SafetyAndCompliance'
import Team from './Pages/ScoreCardPage/ScoreCardComponents/Team'
import Notifications from './Pages/NotificationPage/Notification'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let state;

// Create HttpLink for Apollo
const httpLink = createHttpLink({
	uri: 'https://warm-retreat-50469.herokuapp.com/graphql'
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

  console.log(loggedIn)

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <PaperProvider>
            <View style={AppStyles.container}>

              {/* {loggedIn === true ? (<Banner handleLoggedIn={handleLoggedIn} />) : null} */}

              <Stack.Navigator screenOptions={{headerShown: false}}>
          
                {loggedIn === false ? (<Stack.Screen name="/">
                  {props => <LandingPage handleLoggedIn={handleLoggedIn}  />}
                </Stack.Screen>) : null}
            
                <Stack.Screen name="home">
                  {props => <Home {...props} handleLoggedIn={handleLoggedIn} />}
                </Stack.Screen>

                <Stack.Screen name='analytics'>
                  {props => <Analytics />}
                </Stack.Screen>

                <Stack.Screen name='score_card'>
                  {props => <ScoreCard />}
                </Stack.Screen>
            
              </Stack.Navigator>
            </View>
          </PaperProvider>
        </RecoilRoot>
      </ApolloProvider>
    </NavigationContainer>
  );
}
