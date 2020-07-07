/* eslint-disable */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
import Text from '../component/Text';
import Input from '../component/Input';
import Button from '../component/Button';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons'
import FIcon from 'react-native-vector-icons/Fontisto'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import IIcon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

const Drawer = () => {
    return (<ScrollView style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 20, marginTop: 25 }}>
            <Image
                source={require('../assets/profile.png')}
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 125,
                    alignSelf: 'center',
                }}
            />
            <View style={{ alignItems: 'center' }}>
                <Text bold={true} color={'#707070'}>
                    Gabriel Cantarin{' '}
                </Text>
                <Text font={14} color={'#707070'}>@gabrielcantarin</Text>
            </View>
        </View>
        <Text font={15} color={'black'} style={{ textAlign: 'center', marginBottom: 30 }}>Sera que falta mutio para acabar essa </Text>
        <LinearGradient
            style={{ width: 200, marginHorizontal: 10, borderRadius: 10 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#4E69D9', '#7969C8', '#A869B6']} >
            <View style={{ flexDirection: 'row', paddingVertical: 10, }}>
                <SLIcon color={'#fff'} name={'home'} size={25} style={{ marginHorizontal: 15 }} />
                <Text font={19}>Inicoio</Text>
            </View>
        </LinearGradient>
        <View style={{ flexDirection: 'row', paddingVertical: 10, marginHorizontal: 10 }}>
            <FIcon name={'search'} size={25} style={{ marginHorizontal: 15 }} />
            <Text color={'black'} font={19}>Buscar</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 10, marginHorizontal: 10 }}>
            <MCIcon name={'bell-outline'} size={25} style={{ marginHorizontal: 15 }} />
            <Text color={'black'} font={19}>Notificacoes</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 10, marginHorizontal: 10 }}>
            <MCIcon name={'message-outline'} size={25} style={{ marginHorizontal: 15 }} />
            <Text color={'black'} font={19}>Mesagens</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 10, marginHorizontal: 10 }}>
            <SLIcon name={'user'} size={25} style={{ marginHorizontal: 15 }} />
            <Text color={'black'} font={19}>Perfil</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 10, marginHorizontal: 10 }}>
            <IIcon name={'game-controller-outline'} size={25} style={{ marginHorizontal: 15 }} />
            <Text color={'black'} font={19}>Awards</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 10, marginHorizontal: 10 }}>
            <IIcon name={'md-settings-outline'} size={25} style={{ marginHorizontal: 15 }} />
            <Text color={'black'} font={19}>Configuracoes</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 10, marginHorizontal: 10 }}>
            <SLIcon name={'logout'} size={25} style={{ marginHorizontal: 15 }} />
            <Text color={'black'} font={19}>Sair</Text>
        </View>

    </ScrollView>);
}
export default Drawer
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

});
