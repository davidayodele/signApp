import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Component1 from './App/components/component1/Component1'

export default class signApp extends Component {
  
  render(){
    return(
      <View>
      <Component1 message="Hello world"/>
      </View>
      )
  };
}

AppRegistry.registerComponent('signApp', () => MyApp);