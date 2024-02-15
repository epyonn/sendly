import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Sends: React.FC = () => {
    return (
        <View style={style.container}>
            <Text> Sends Screen </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Sends;