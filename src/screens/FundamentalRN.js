import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

import ItemList from '../components/ItemList';

class FundamentalRN extends Component {

  constructor() {
    super();
    this.state = {
      incValue: 0
    }
    this.handleIncrement();
  }

  componentWillMount() {
    console.log('Component Will Mount')
  }

  componentDidMount() {
    console.log('Component Did Mount')
  }

  handleIncrement = () => {
    setInterval(() => {
      this.setState({
        incValue: this.state.incValue + 1
      })
    }, 1000)
  }

  // arrow function
  hello = () => {
    return 'Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
  }

  showAlert = (item) => () => {
    alert(item)
  }

  render() {
    console.log('Render')
    const isActive = true;
    const arrayData = [1,2,3,4,5,6];

    return (
      <View style={styles.container}>
        <View style={styles.firstView}>
          {arrayData.map((item, index) => {
            return (
              <ItemList name={item} key={index} />
            )
          })}
        </View>
        <View style={styles.secView}>
          <Text style={styles.textInc}>{this.state.incValue}</Text>
        </View>
      </View>
    )
  }

}

export default FundamentalRN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 40,
    flexDirection: 'row'
  },
  textInc: {
    fontSize: 100,
    textAlign: 'center'
  },
  firstView: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'flex-end'
  },
  secView: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'flex-end'
  }
})

