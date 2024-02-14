import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Gyms: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Gym Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Gyms;