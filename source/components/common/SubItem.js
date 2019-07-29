import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

class SubItem extends Component {

  constructor(props){
    super(props);
  }


  render(){
    const styles = {
      containerStyle:{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
      }
    };

    const {
      containerStyle
    } = styles;

    return (
      <View style={containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

export default SubItem;
