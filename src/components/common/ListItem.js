import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ListItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : props.data
    }
  }

  render(){
    const styles = {
      containerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
      },
      headerStyle:{
        fontWeight: 'bold',
        fontSize: 20
      },
      itemStyle:{
        fontSize:20
      }
    };

    const {
      containerStyle,
      headerStyle,
      itemStyle
    } = styles;

    let subitems = this.state.data.map( a => {
         return (
           <View style={{padding:10}}>
            <Text style={itemStyle}>{a}</Text>
           </View>
         );
    });
    return(
      <View style={containerStyle}>
        <Text style={headerStyle}>{this.props.title}</Text>
        {subitems}
      </View>
    );
  }
}

export default ListItem;
