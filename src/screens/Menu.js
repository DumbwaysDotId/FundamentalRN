import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
class Menu extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={() => this.props.navigation.navigate('FundamentalRN')}>
              <Text>Fundamental React Native</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('List')}>
              <Text>List</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('NativeBase')}>
              <Text>Native Base</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Menu;