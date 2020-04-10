import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as firebase from 'firebase';

import reducers from './reducers'
import firebaseMiddleware from './middleware/firebase'

// import the different screens
import Loading from './Components/Auth/Loading'
import SignUp from './Components/Auth/SignUp'
import Login from './Components/Auth/Login'
import Main from './Components/Main'


// FIREBASE SETUP
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDGdzO_bergequXwcnk3-wlpZITvhA52C4",
  authDomain: "findme-8cf68.firebaseapp.com",
  databaseURL: "https://findme-8cf68.firebaseio.com",
  projectId: "findme-8cf68",
  storageBucket: "findme-8cf68.appspot.com",
  messagingSenderId: "152473062548",
  appId: "1:152473062548:web:bc857e4eeba601d18df881",
  measurementId: "G-M65K126KBW"
};

const fireapp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// APP SETUP

const Stack = createStackNavigator();


const AppContainer = function() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ title: 'Loading' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'SignUp' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Main' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
}

const store = createStore(reducers, applyMiddleware(firebaseMiddleware, thunk));
global.store = store

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
