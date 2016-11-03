import React from 'react';
import { StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import { Container, Content, List, ListItem, Text, CheckBox } from 'native-base';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  table: {
    width: width * 0.9,
    marginBottom: 4,
    flexDirection: 'row',
    borderColor: 'lightblue',
    padding: 5,
    marginTop: 10,
  }
});

export default class ShoppingListItem extends React.Component {
  constructor(props) {
    super(props);
    this.setCheck = this.setCheck.bind(this)
    this.state = {
      checked: 'false'
    }
  }

  componentDidMount() {
    AsyncStorage.getItem(this.props.item[3], (err, value) => {
      if (value !== null) {
        this.setState({checked: value});
      }
    });
  }

  setCheck () {
    var value = !JSON.parse(this.state.checked);
    AsyncStorage.setItem(this.props.item[3], JSON.stringify(value), () => {
      this.setState({checked: value});
    });
  }

  render() {
    return (
      <ListItem style={styles.table}>
        <CheckBox 
          checked={JSON.parse(this.state.checked)}
          onPress={this.setCheck}/>
        <Text>{this.props.item[0]} {this.props.item[1]} {this.props.item[2]}</Text>
      </ListItem>
    );
  }
}