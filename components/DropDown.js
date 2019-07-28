import React, {Component} from 'react';
import {Picker, Text, View} from 'react-native';

class DropDown extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : props.list
    }
  }

  render(){
    let serviceItems = this.state.items.map( a => {
         return <Picker.Item key={a} value={a} label={a} />
     });
     
    return(
      <View>
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

export default DropDown;
