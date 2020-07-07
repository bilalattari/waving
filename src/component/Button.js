/* eslint-disable */

import React, {Component} from 'react';
import {Button, Icon} from 'react-native-elements';
import {TouchableOpacity, ActivityIndicator, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';

let images = {
  facebook: require('../assets/faebook.png'),
  google: require('../assets/google.png'),
  apple: require('../assets/apple.png'),
  prof : require('../assets/prof.png')
};
export default (CustomButton = ({
  gradient,
  height,
  width,
  borderRadius,
  loader,
  loaderColor,
  title,
  backgroundColor,
  textStyle,
  textColor,
  buttonStyle,
  icon,
  onPress,
  iconName,
  imgStyle
}) => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={gradient ? ['#4E69D9', '#7969C8', '#A869B6'] : ['#fff', '#fff']}
    style={[
      {
        height: height ? height : 50,
        width: width ? width : '85%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
      },
      buttonStyle,
    ]}>
    <TouchableOpacity
      disabled={loader}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CFD6E6',
        borderRadius: 12,
        borderWidth: 1,
      }}
      
      onPress = {()=> onPress && onPress()}>
      {icon && (
        <Image
          source={images[iconName]}
          style={[{position: 'absolute', left: 15, height: 25, width: 25} , imgStyle]}
        />
      )}
      {loader ? (
        <ActivityIndicator
          color={loaderColor ? loaderColor : '#fff'}
          size={'large'}
        />
      ) : (
        <Text
          text={title}
          color={textColor ? textColor : '#425D9A'}
          style={[{letterSpacing: 1} , textStyle]}
        />
      )}
    </TouchableOpacity>
  </LinearGradient>
));
