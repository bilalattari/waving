/* eslint-disable */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import Text from '../component/Text';
import Input from '../component/Input';
import Button from '../component/Button';
export default (Login = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/background.png')}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text
            font={20}
            marginLeft={12}
            marginVertical={15}
            color={'#707070'}
            bold={true}>
            Seja Bem-vindo!
          </Text>
          <Input placeholder={'Nome Completo'} />
          <Input placeholder={'Username'} />
          <Input placeholder={'E-mail'} />
          <Input placeholder={'Senha'} />
          <View style={styles.socialButton}>
            <Button
              onPress={() => navigation.navigate('Home')}
              gradient={true}
              textColor={'#fff'}
              title={'Cadastrar'}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.orText} color={'#A5A2A2'}>
              - - - - - - - - - - - - -
            </Text>
            <Text style={styles.orText} color={'#A5A2A2'}>
              Ou
            </Text>
            <Text style={styles.orText} color={'#A5A2A2'}>
              - - - - - - - - - - - - -
            </Text>
          </View>
          <View style={styles.socialButton}>
            <Button
              textStyle={{fontSize: 15}}
              icon={true}
              iconName={'google'}
              title={'Entrar com Google'}
            />
          </View>
          <View style={styles.socialButton}>
            <Button
              textStyle={{fontSize: 15}}
              icon={true}
              iconName={'facebook'}
              title={'Entrar com Facebook'}
            />
          </View>
          <View style={styles.socialButton}>
            <Button
              textStyle={{fontSize: 15}}
              icon={true}
              iconName={'apple'}
              title={'Entrar com Apple'}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  socialButton: {marginVertical: 15},
  orText: {marginHorizontal: 12},
  inputContainer: {
    height: Dimensions.get('screen').height - 130,
    marginTop: 25,
    width: '92%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
