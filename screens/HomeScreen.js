import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'
import Constants from 'expo-constants'

export default class HomeScreen extends React.Component {
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
      /* handlePhoneChange = phone => {
        this.setState({phone})
      } */
    
      handleSubmit = () => {
        alert('Submit in development')
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