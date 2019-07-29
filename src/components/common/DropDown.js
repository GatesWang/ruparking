import React, {Component} from 'react';
import {Picker, Text, View} from 'react-native';

class DropDown extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : props.data
    }
  }

  render(){
    let serviceItems = this.state.data.map( a => {
         return <Picker.Item key={a} value={a} label={a} />
    });

     const styles = {
       containerStyle:{
         flexDirection : 'column',
         alignItems: 'center',
       }
     };

     const {
       containerStyle,
     } = styles;

    return(
      <View style = {containerStyle}>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          {serviceItems}
        </Picker>
      </View>
    );
  }
}

export {DropDown};
