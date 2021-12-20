import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from 'apollo-link-http';
import LandingPage from './Pages/Landing'
import { NativeRouter, Route, Link, Switch,	NativeModules } from 'react-router-native';
import stateChange from './Hooks/handleToken'

let state;

// Create HttpLink for Apollo
const httpLink = createHttpLink({
	uri: 'http://192.168.1.203:5001/graphql',
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
                <Text style={{ color: 'white' }}>Loggin In</Text>
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
