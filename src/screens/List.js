import React from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            valueInput: ''
        }
    }

    handleChangeText = (text) => {
        this.setState({
            valueInput: text
        })
    }

    renderItem = ({item, index}) => {
        return (
            <View key={index} style={{marginBottom: 10}}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>
        )
    }

    render() {
        const cars = [{
            name: 'BMW',
            price: 3000
        }, {
            name: 'Porsche',
            price: 1500
        },{
            name: 'Jaguar',
            price: 2000
        }];
        return (
            <View>
                <Text>{this.state.valueInput}</Text>
                <TextInput
                    placeholder="Type Here"
                    onChangeText={(text) => {
                        this.setState({
                            valueInput: text
                        })
                    }
                }
                />
                {cars.map((item, index) => {
                    return (
                        <View key={index} style={{marginBottom: 10}}>
                            <Text >{item.name}</Text>
                            <Text >{item.price}</Text>
                        </View>
                    )
                })}

                <FlatList
                    data={cars}
                    renderItem={this.renderItem}
                />
                
            </View>
        )
    }
}

export default App;