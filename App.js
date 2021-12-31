import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
import MedicalAttention from './Pages/ReportAnAccidentPage/MedicalAttention'
import LeadershipNotified from './Pages/ReportAnAccidentPage/LeadershipNotified'
import PoliceContacted from './Pages/ReportAnAccidentPage/PoliceContacted'
import PleaseRemember from './Pages/ReportAnAccidentPage/PleaseRemember'
import EditAccountInformation from './Pages/SettingsPage/SettingsComponents/EditAccountInformation'
import ViewAccidents from './Pages/SettingsPage/SettingsComponents/ViewAccidents';

let state;

// Create HttpLink for Apollo
const httpLink = createHttpLink({
	uri: 'http://10.0.0.46:5001/graphql',
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

export default function App() {
  const [loggedIn, setloggedIn] = useState(false)

	const handleLoggedIn = () => {
		state = stateChange('')
		setloggedIn(!loggedIn)
	}

  return (
    <NativeRouter>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <View style={styles.container}>

              {loggedIn === false ? (<LandingPage handleLoggedIn={handleLoggedIn}/>) : null}

              {loggedIn === true ? (
                <Switch>
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/scorecard' component={ScoreCard} />
                  <Route exact path='/shiftplanner' component={ShiftPlanner} />


                  <Route exact path='/leadership_notified' component={LeadershipNotified} />
                    <Route exact path='/police_contacted' component={PoliceContacted} />
                      <Route exact path='/please_remember' component={PleaseRemember} />
                        <Route exact path='/before_we_begin' component={BeforeWeBegin} />
                          <Route exact path='/create_or_add' component={CreateOrAdd} />
                            <Route exact path='/report_an_accident' component={ReportAnAccident} />
                    <Route exact path='/medical_attention' component={MedicalAttention} />
                      
                      
                      
                      <Route exact path='/reportcollision' component={ReportCollision} />
                      <Route exact path='/reportinjuryaccident' component={ReportInjuryAccident} />
                      <Route exact path='/reportpropertyaccident' component={ReportPropertyAccident} />
                      <Route exact path='/reporthitperson' component={ReportHitPerson} />
                      <Route exact path='/reportinjuryreport' component={ReportInjuryReport} />


                  <Route exact path='/reporting' component={Reporting} />
                  <Route exact path='/productivity' component={Productivity} /> 
                  <Route exact path='/communication' component={Communication} />
                  <Route exact path='/analytics' component={Analytics} />


                  <Route exact path='/settings' component={Settings} />
                  <Route exact path='/account_information' component={AccountInformation} />
                  <Route exact path="/account_settings" component={AccountSettings} />
                  <Route exact path='/edit_account_information' component={EditAccountInformation} />
                  <Route exact path='/view_accidents' component={ViewAccidents} />

                </Switch>
              ) : null}

            <StatusBar style="auto" />
          </View>
        </ApolloProvider>
      </RecoilRoot>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2c3d',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
