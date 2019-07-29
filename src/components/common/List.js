import React, {Component} from 'react';
import {TouchableOpacity, ScrollView, Text, View} from 'react-native';
import ListItem from './ListItem';

class List extends Component {
  constructor(props){
    super(props);

    var expanded = {};
    props.data.forEach(element => {
      expanded[element.title] = false;
    });

    this.state = {
      data : props.data,
      expanded : expanded
    };
  }

  toggle(title){
    console.log(title);
    var expanded = this.state.expanded;
    expanded[title] = !expanded[title];
    this.setState({expanded: expanded});
  }

  renderListItems(){
    const listItems = this.state.data.map(data =>
      <ListItem
        title={data.title}
        data={data.data}
      />
    );

    return (
      <ScrollView>
        {listItems}
      </ScrollView>
    );
  }
  render(){
    return(
      <View style={{flex:1}}>
        {this.renderListItems()}
       </View>
    );
  }
}

export {List};
