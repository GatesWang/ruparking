import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import SubItem from './SubItem';
class ListItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      data2: props.data2,
      expanded: false
    }
  }

  toggle(){
    this.setState({expanded: !this.state.expanded});
  }

  render(){
    const styles = {
      containerStyle:{
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 10
      },
      headerStyle:{
        fontWeight: 'bold',
        fontSize: 25
      },
      itemStyle1:{
        flex:2,
        fontSize: 25,
      },
      itemStyle2:{
        flex:1,
        fontSize: 18,
      },
    };

    const {
      containerStyle,
      headerStyle,
      itemStyle1,
      itemStyle2
    } = styles;
    var subitems = (<View></View>);

    if(this.state.expanded){
    subitems = this.state.data.map( (a,i) => {
      return (
        <SubItem>
          <Text style={itemStyle1}>{a}</Text>
          <Text style={itemStyle2}> {this.state.data2[i]} miles</Text>
        </SubItem>
      );
     });
    }

    return(
      <View style={containerStyle}>
      <TouchableOpacity  onPress={()=>this.toggle()}>
        <Text style={headerStyle}> {this.props.title} </Text>
      </TouchableOpacity>
        {subitems}
      </View>
    );
  }
}

export default ListItem;
