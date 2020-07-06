/* eslint-disable */

import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
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
import Footer from '../component/Footer'

export default (Home = props => {

  const statistics = () => {
    return (
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
            250{' '}
          </Text>
          <Text font={14} color={'#707070'}>
            Segiuondros{' '}
          </Text>
        </View>
        <View style={styles.textAlign}>
          <Text bold={true} color={'#707070'}>
            150{' '}
          </Text>
          <Text font={14} color={'#707070'}>
            Alcanse{' '}
          </Text>
        </View>
      </View>

    )
  }

  const contact = () => {
    return (
      <View style={styles.shareButton}>
        <Image
          style={[styles.profileImages, { height: 40, width: 40 }]}
          source={require('../assets/Share.png')}
        />
        <Button
          width={100}
          icon={true}
          iconName={'prof'}
          imgStyle={{ height: 10, width: 10, left: 9 }}
          gradient={true}
          buttonStyle={{ height: 43 }}
          textStyle={{ fontSize: 14, color: '#fff' }}
          title={'Seguir'}
        />
        <Image
          style={[styles.profileImages, { height: 40, width: 40 }]}
          source={require('../assets/Message.png')}
        />
      </View>
    )
  }

  const rowIcon = (icon, iconType, number, color, size, style) => {
    return (
      <TouchableOpacity style={[styles.iconRow, style && style]}>
        <Icon type={iconType ? iconType : 'font-awesome'}
          name={icon} color={color ? color : "#707070"}
          size={size ? size : 20} />
        {
          number &&
          <Text font={8} marginLeft={3} color={'#707070'}>
            {number}
          </Text>
        }
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: '#F2F3F7' }}>
          <View style={{ height: 120, backgroundColor: '#000', width: "100%" }} >

            <View style={[styles.row,
            {
              position: "absolute", zIndex: 1200, top: 12, width: "100%", left: 0,

            }]}>
              {rowIcon('menu', 'entypo', undefined, '#fff', 30, { justifyContent: "flex-start" })}
              {rowIcon('dots-three-horizontal', 'entypo', undefined, '#fff', 30, { justifyContent: "flex-end", paddingRight: 12 })}
            </View>
            <Image source={require('../assets/Panel.png')}
              style={{ height: 200, width: "100%", }} />
          </View>
          <View style={{ height: 280, backgroundColor: '#fff' }}>
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
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text bold={true} color={'#707070'}>
                Gabriel Cantarin{' '}
              </Text>
              <Text font={14} color={'#707070'}>
                @gabrielcantarin
          </Text>
              <View style={{ flexDirection: 'row' }}>
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
              {contact()}
              {statistics()}
            </View>
          </View>


          <View style={{ height: 150, backgroundColor: '#fff', marginVertical: 8 }}>
            <View
              style={styles.row}>
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
          {
            ['0', '1', '2', '3'].map((data, index) => {
              return (
                <View key={index} style={styles.userInfoView}>
                  <View style={styles.row}>
                    <View style={{ flexDirection: "row" }}>
                      <Image source={require('../assets/profile.png')} style={{ height: 50, width: 50 }} />
                      <View style={{ paddingLeft: 6 }}>
                        <Text font={14} bold={true} color={'#707070'}>
                          Gabriel Cantarin{' '}
                        </Text>
                        <Text font={10} color={'#707070'}>
                          @gabrielcantarin
          </Text>
                      </View>
                    </View>
                    <View style={{ paddingRight: 6, alignItems: "flex-end" }}>
                      <Text font={10} color={'#707070'}>
                        10 : 22
              </Text>
                      <Text font={10} color={'#707070'}>
                        50 metres
          </Text>
                    </View>
                  </View>
                  <Text style={{ padding: 6 }} font={14} color={'#707070'}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation.
        </Text>
                  <View style={styles.row}>
                    {rowIcon('heart-o', undefined, '10')}
                    {rowIcon('code-fork', undefined, '10')}
                    {rowIcon('share', 'feather', '10')}
                    {rowIcon('dots-three-horizontal', 'entypo')}
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
      <Footer />
    </View>

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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  userInfoView: {
    minHeight: 120, backgroundColor: "#fff", marginVertical: 4,
    elevation: 1, width: "95%", alignSelf: "center"
  },
  iconRow: {
    flex: 1, justifyContent: 'center',
    alignItems: "flex-start", flexDirection: "row"
  },
  textAlign: { alignItems: 'center', marginHorizontal: 12, marginTop: 8 },
  shareButton: { flexDirection: 'row', alignItems: 'center' },
});
