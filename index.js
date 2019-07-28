/**
 * @format
 */
import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import DropDown from './components/DropDown';

const App = () => {

  var permitTypes = [
    'Commuter Zone A',
    'Commuter Zone B',
    'Commuter Zone C',
    'Commuter Zone D',
    'Commuter Zone L',
    'Commuter Zone H',
    'Night Commuter',
    'Resident Permits'
  ];

  var campuses = ['College Ave','Livingston', 'Busch', 'Cook/Douglas'];

  return(
    <View>
      <DropDown  title="Permit Type" list={permitTypes}/>
      <DropDown  title="Campus" list={campuses}/>
    </View>
  );
};

AppRegistry.registerComponent('ruparking', () => App);
