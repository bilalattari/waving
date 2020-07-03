/* eslint-disable */

import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Text from '../component/Text';
import Input from '../component/Input'
import Button from '../component/Button'
export default Login = (props) => {
    return (
        <ImageBackground style={styles.container}
            source={require('../assets/background.png')}>
            <View style={styles.inputContainer}>
                <Text font={20}
                    marginLeft={12}
                    marginVertical={15}
                    color={'#707070'} bold={true}>Seja Bem-vindo!</Text>
                <Input placeholder={'Nome Completo'} />
                <Input placeholder={'Username'} />
                <Input placeholder={'E-mail'} />
                <Input placeholder={'Senha'} />
                <Button gradient = {true} title  = {'Cadastrar'} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    inputContainer: {
        height: Dimensions.get('screen').height - 100, width: "92%",
        backgroundColor: '#fff', alignSelf: "center", borderRadius: 5
    }
})


