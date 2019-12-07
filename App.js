import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/*export default*/ class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    // moved header style options to appAppnavigator
    /* headerStyle: {
      backgroundColor: '#119'
    }, */
  };

  state = {
    name: '',
    phone: '',
  }

  handleNameChange = name => {
    this.setState({name})
  }
  handlePhoneChange = phone => {
    this.setState({phone})
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Test</Text>
        <TextInput
        style={styles.input}
        value={this.state.name}
        onChangeText={this.handleNameChange}
        placeholder="Name"
        />
        <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={this.state.phone}
        onChangeText={this.handlePhoneChange}
        placeholder="Phone"
        />
        <Button title="Submit" onPress={this.handleSubmit}/>
        <ScrollView>
          <Text>{this.state.name} : {this.state.phone}</Text>
        </ScrollView>
        <Button
          title="Go to Details Screen"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'example prop string',
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  }
});

class DetailsScreen extends React.Component {

  
  static navigationOptions = {
    title: 'Details',
    //moved header style options to appNavigator
    /* headerStyle: {
      backgroundColor: 'green'
    }, */
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title='Info'
        color='#fff'
      />
    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

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
  render() {
    return <AppContainer />;
  }
}