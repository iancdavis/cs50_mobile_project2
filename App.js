import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DetailsScreen from './screens/DetailsScreen.js';
import HomeScreen from './screens/HomeScreen.js' 
import { fetchMovies } from './api'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    /* Header configuration */
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'green',
        
      },
      headerTitleStyle: {
        width: '50%',
        color: 'white'
      }
    },

  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  componentDidMount() {
    fetchMovies("avengers")
  }
  render() {
    return <AppContainer />;
  }
}