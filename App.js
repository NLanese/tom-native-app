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
import ViewNotifications from './Global/BannerComponents/BellComponents/ViewNotifications'

let state;

// Create HttpLink for Apollo
const httpLink = createHttpLink({
	uri: 'http://192.168.1.62:5001/graphql'
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
          <PaperProvider>
            <View style={AppStyles.container}>
            
             <View>

                {loggedIn === false ? (<LandingPage handleLoggedIn={handleLoggedIn}/>) : null}
                
                {loggedIn === true ? (
                  <Banner handleLoggedIn={handleLoggedIn}/>
                ) : null}

                {loggedIn === true ? (
                  <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/shift_planner' component={ShiftPlanner} />

                    <Route exact path='/view_notifications' component={ViewNotifications} />

                    <Route exact path='/leadership_notified' component={LeadershipNotified} />
                      <Route exact path='/police_contacted' component={PoliceContacted} />
                        <Route exact path='/please_remember' component={PleaseRemember} />
                          <Route exact path='/before_we_begin' component={BeforeWeBegin} />
                            <Route exact path='/create_or_add' component={CreateOrAdd} />
                              <Route exact path='/report_an_accident' component={ReportAnAccident} />
                        
                        
                        
                        <Route exact path='/reportcollision' component={ReportCollision} />
                        <Route exact path='/reportinjuryaccident' component={ReportInjuryAccident} />
                        <Route exact path='/reportpropertyaccident' component={ReportPropertyAccident} />
                        <Route exact path='/reporthitperson' component={ReportHitPerson} />
                        <Route exact path='/reportinjuryreport' component={ReportInjuryReport} />


                    <Route exact path='/reporting' component={Reporting} />
                    <Route exact path='/productivity' component={Productivity} /> 
                    <Route exact path='/admin_messages' component={Communication} />
                    <Route exact path='/analytics' component={Analytics} />


                    <Route exact path='/settings' component={Settings} />
                      <Route exact path='/account_information' component={AccountInformation} />
                        <Route exact path='/edit_account_information' component={EditAccountInformation} />
                        <Route exact path='/view_accidents' component={ViewAccidents} />
                      <Route exact path='/account_settings' component={AccountSettings} />

                    <Route exact path='/score_card' component={ScoreCard} />
                      <Route exact path='/quality' component={Quality} />
                      <Route exact path='/safetyandcompliance' component={SafetyAndCompliance} />
                      <Route exact path='/team' component={Team} />

                  </Switch>
                ) : null}
              <StatusBar style="auto" />
              </View>
            
            </View>
          </PaperProvider>
        </ApolloProvider>
      </RecoilRoot>
    </NativeRouter>
  );
}
