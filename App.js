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
import CreateOrAdd from './Pages/ReportAnAccidentPage/CreateOrAdd'
import ReportThirdParty from './Pages/ReportAnAccidentPage/ReportThirdParty'
import ReportInjuryAccident from './Pages/ReportAnAccidentPage/ReportInjuryAccident'
import ReportPropertyAccident from './Pages/ReportAnAccidentPage/ReportPropertyAccident'
import ReportHitPerson from './Pages/ReportAnAccidentPage/ReportHitPerson'
import ReportInjuryReport from './Pages/ReportAnAccidentPage/ReportInjuryReport'

let state;

// Create HttpLink for Apollo
const httpLink = createHttpLink({
	uri: 'http://192.168.1.52:5001/graphql',
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
                  <Route exact path='/createoradd' component={CreateOrAdd} />


                  <Route exact path='/reportanaccident' component={ReportAnAccident} />
                    <Route exact path='/reportthirdparty' component={ReportThirdParty} />
                    <Route exact path='/reportinjuryaccident' component={ReportInjuryAccident} />
                    <Route exact path='/reportpropertyaccident' component={ReportPropertyAccident} />
                    <Route exact path='/reporthitperson' component={ReportHitPerson} />
                    <Route exact path='/reportinjuryreport' component={ReportInjuryReport} />


                  <Route exact path='/reporting' component={Reporting} />
                  <Route exact path='/productivity' component={Productivity} /> 
                  <Route exact path='/communication' component={Communication} />
                  <Route exact path='/analytics' component={Analytics} />
                  <Route exact path='/settings' component={Settings} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
