import React from 'react'
import {ScrollView, StyleSheet, Button, Text, View, Image} from 'react-native'
import Constants from 'expo-constants'

export default class DetailsScreen extends React.Component {

  
    static navigationOptions = {
      title: 'Details',
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
      const movieData = navigation.getParam('data', 'no-data')
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.title}>{JSON.stringify(movieData.Title)}</Text>
          </View>
          <View style={{flex:1, padding:20}}>
            <ScrollView>
              <Text>Plot</Text>
              <Text>{JSON.stringify(movieData.Plot)}</Text>
            </ScrollView>
          </View>
          <Image style={styles.image} source={{uri: movieData.Poster}} />
          <View style={styles.info}>
            <ScrollView>
              <Text>Writer: {JSON.stringify(movieData.Writer)}</Text>
              <Text>Director: {JSON.stringify(movieData.Director)}</Text>
              <Text>Actors: {JSON.stringify(movieData.Actors)}</Text>
            </ScrollView>
          </View>
          <View style={{flex:1}}>
            {movieData.Ratings.map((value, index) => {
              return (<Text style={{textAlign: 'center'}} key={index}>{value.Source}:  {value.Value}</Text>)
            })}
          </View>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      justifyContent: 'center',
    },
    image: {
      flex: 5,
      width: undefined,
      height: undefined,
      resizeMode: 'contain',
    },
    info: {
      flex: 2,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center',
    },
  });
  
  