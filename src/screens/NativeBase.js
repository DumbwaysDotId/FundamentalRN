import React, { Component } from 'react';
import { Container, Header, Title, Content, FooterTab, Footer, Button, Left, Right, Body, Icon, Text } from 'native-base';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';

class App extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     isReady: false,
        // };
    }

      
    async componentDidMount() {
        // await Font.loadAsync({
        //   Roboto: require('native-base/Fonts/Roboto.ttf'),
        //   Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        //   ...Ionicons.font,
        // });
        // this.setState({ isReady: true });
    }

    render() {
        // if (!this.state.isReady) {
        //     return null;
        // }
        return(
            <Container>
                <Header>
                    <Left>
                        <Button>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>
                        This is Content Section
                    </Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                        <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

export default App;