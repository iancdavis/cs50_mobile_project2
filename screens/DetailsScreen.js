import React from 'react'
import {Button, Text, View} from 'react-native'

export default class DetailsScreen extends React.Component {

  
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
          color='#000'
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
  
  