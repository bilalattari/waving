/* eslint-disable */

import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Button from '../component/Button';
import Text from '../component/Text';
export default (Home = props => {
  return (
    <ScrollView style={{backgroundColor: '#ccc'}}>
      <View style={{height: 120, backgroundColor: '#000'}} />
      <View style={{height: 280, backgroundColor: '#fff'}}>
        <Image
          source={require('../assets/profile.png')}
          style={{
            height: 100,
            width: 100,
            borderRadius: 125,
            alignSelf: 'center',
            marginTop: -45,
          }}
        />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text bold={true} color={'#707070'}>
            Gabriel Cantarin{' '}
          </Text>
          <Text font={14} color={'#707070'}>
            @gabrielcantarin
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.profileImages}
              source={require('../assets/Trophy-2.png')}
            />
            <Image
              style={styles.profileImages}
              source={require('../assets/rocket.png')}
            />
            <Image
              style={styles.profileImages}
              source={require('../assets/profile.png')}
            />
          </View>
          <View style={styles.shareButton}>
            <Image
              style={[styles.profileImages, {height: 40, width: 40}]}
              source={require('../assets/Share.png')}
            />
            <Button
              width={100}
              icon={true}
              iconName={'prof'}
              imgStyle={{height: 10, width: 10, left: 9}}
              gradient={true}
              buttonStyle={{height: 43}}
              textStyle={{fontSize: 14, color: '#fff'}}
              title={'Seguir'}
            />
            <Image
              style={[styles.profileImages, {height: 40, width: 40}]}
              source={require('../assets/Message.png')}
            />
          </View>
          <View style={styles.shareButton}>
            <View style={styles.textAlign}>
              <Text bold={true} color={'#707070'}>
                {' '}
                50{' '}
              </Text>
              <Text font={14} color={'#707070'}>
                {' '}
                Segiuondo{' '}
              </Text>
            </View>
            <View style={styles.textAlign}>
              <Text bold={true} color={'#707070'}>
                {' '}
                250{' '}
              </Text>
              <Text font={14} color={'#707070'}>
                {' '}
                Segiuondros{' '}
              </Text>
            </View>
            <View style={styles.textAlign}>
              <Text bold={true} color={'#707070'}>
                {' '}
                150{' '}
              </Text>
              <Text font={14} color={'#707070'}>
                {' '}
                Alcanse{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{height: 150, backgroundColor: '#fff', marginVertical: 8}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <Text color={'#707070'} font={16} bold={true}>
            Fotos
          </Text>
          <Text color={'#707070'} font={14}>
            View more
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
          }}>
          {['0', '1', '2', '3', '4'].map((data, index) => (
            <Image
              source={require('../assets/Foto1.png')}
              style={{
                height: 110,
                width: 110,
                marginHorizontal: 2,
              }}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
});
const styles = StyleSheet.create({
  profileImages: {
    height: 25,
    width: 25,
    margin: 4,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  textAlign: {alignItems: 'center', marginHorizontal: 12, marginTop: 8},
  shareButton: {flexDirection: 'row', alignItems: 'center'},
});
