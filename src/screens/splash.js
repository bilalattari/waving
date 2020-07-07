/* eslint-disable */

import React, { useEffect } from 'react';
import { Button, Icon } from 'react-native-elements';
import { TouchableOpacity, ActivityIndicator, View, Image, StyleSheet } from 'react-native';
import Text from '../component/Text';
export default Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 1000)
    });
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: 'center' }
})


