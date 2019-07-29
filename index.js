/**
 * @format
 */
import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import {DropDown, List} from './src/components/common';
import { permitTypes, campuses } from './src/Global';

const App = () => {
  const {
    containerStyle
  } = styles;

  const data = [
    {
      title: '6PM-2AM',
      data:['lot1', 'lot2', 'lot3', 'lot4', 'lot5', 'lot6', 'lot7', 'lot8', 'lot9'],
      data2:[1, 3, 4, 5, 2, 7, 2, 3, 2]
    },
    {
      title: '6PM-8AM', 
      data:['lot1', 'lot2'],
      data2:[3, 4],
    },
  ];

  return(
    <View style={{flex:1}}>
      <View style = {containerStyle}>
        <DropDown  title="Permit Type" data={permitTypes}/>
        <DropDown  title="Campus" data={campuses}/>
      </View>
      <List style={{flex:1}} data = {data}/>
    </View>
  );
};

const styles = {
  containerStyle:{
    flexDirection : 'column',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  }
};

AppRegistry.registerComponent('ruparking', () => App);
