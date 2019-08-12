import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ItemList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Item {this.props.name}</Text>
            </View>
        )
    }
}

export default ItemList;

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})