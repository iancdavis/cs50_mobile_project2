import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'

import { fetchMovies, fetchMovieDetails } from '../api'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
      };
    
      state = {
        name: '',
        results: [],
      }
    
      handleNameChange = async (name) => {
        this.setState({name})
        const searchResults = await fetchMovies(this.state.name)
        this.setState({results: searchResults})
      }
    
      handleSubmit = async () => {
        const searchResults = await fetchMovies(this.state.name)
        this.setState({results: searchResults})
      }

      onPressSelectMovie = async (value) => {
          const detailedSearchResults = await fetchMovieDetails(value.Title)
          this.props.navigation.navigate('Details', {data: detailedSearchResults})
      }

      checkShowResults = () => {
          if(this.state.results === undefined){
              return false
          } else { return true }

      }

      render() {
        return (
          <View style={styles.container}>
            <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={this.handleNameChange}
            placeholder="search movies"
            autoFocus={true}
            />
            <ScrollView>
            {this.checkShowResults() && (
                this.state.results.map((value, index) => {
                    return (
                        <TouchableOpacity style={styles.item} key={index} onPress={this.onPressSelectMovie.bind(this,value)}>
                            <Text key={index}>{value.Title}, {value.Year}</Text>
                        </TouchableOpacity>
                    )  
                })
              )}
            </ScrollView>
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
        backgroundColor: '#b3d1ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    });