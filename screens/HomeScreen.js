import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'

import { fetchMovies } from '../api'
import ScrollViewSearchResults from '../ScrollViewSearchResults';
import { Row } from '../Row'
//import { FlatList } from 'react-native-gesture-handler';

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
        results: [],
      }
    
      handleNameChange = name => {
        this.setState({name})
        //this.setState({results: fetchMovies(name)})
      }
    
      handleSubmit = async () => {
        const searchResults = await fetchMovies(this.state.name)
        this.setState({results: searchResults})
      }

      onPressSelectMovie = (value) => {
          alert(`you pressed the ${value.Title}`)
      }

      //REMOVE
      handleTesting = () => {
          console.log("BEGIN STATE.RESULTS\n\n")
          console.log(this.state.results)
      }
      render() {
        return (
          <View style={styles.container}>
            <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={this.handleNameChange}
            placeholder="Name"
            />
            <Button title="Submit" onPress={this.handleSubmit}/>
            <Button title="Testing" onPress={this.handleTesting}/>
            <ScrollView>
            {this.state.results[0] != undefined && (
                this.state.results.map((value, index) => {
                    return (
                        <TouchableOpacity style={styles.item} key={index} onPress={this.onPressSelectMovie.bind(this,value)}>
                            <Text key={index}>{value.Title}, {value.Year}</Text>
                        </TouchableOpacity>
                        )  
                })
              )}
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
      },
      item: {
        backgroundColor: '#b3ffb3',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    });