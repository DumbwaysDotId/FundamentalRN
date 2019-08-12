import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Menu from './src/screens/Menu';
import FundamentalRN from './src/screens/FundamentalRN';
import List from './src/screens/List';
import NativeBase from './src/screens/NativeBase';

const AppNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: {
            title: 'Menu'
        }
    },
    FundamentalRN: {
        screen: FundamentalRN,
        navigationOptions: {
            title: 'Fundamental'
        }
    },
    List: {
        screen: List,
        navigationOptions: {
            title: 'List'
        }
    },
    NativeBase: {
        screen: NativeBase,
        navigationOptions: {
            title: 'Native Base'
        }
    }
});

export default createAppContainer(AppNavigator)