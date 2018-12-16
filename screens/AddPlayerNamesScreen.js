import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput } from 'react-native';
import AddPlayerNamesComponent from '../components/AddPlayerNamesComponent';

export default class AddPlayerNamesScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Add Player Names',
        headerTintColor: '#CF7307',
        headerStyle: {
            backgroundColor: '#fffbe0'
        },
        headerTitleStyle: {
            alignSelf: 'center',
            color: '#CF7307'
        }
    };
  
    handleSubmit = formState => {
        this.props.screenProps.addPlayerNames(formState);
        this.props.navigation.navigate('StartGame');
    };
  
    render() {
      return <AddPlayerNamesComponent onSubmit={this.handleSubmit} />;
    }
}
