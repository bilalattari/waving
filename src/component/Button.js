/* eslint-disable */

import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { themeColor, pinkColor } from '../Constant/index';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';
export default CustomButton = ({ gradient, height, width, borderRadius,
  loader, loaderColor, title, backgroundColor, textStyle, buttonStyle }) =>
  gradient ? (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#2D5796', '#4B88BC', '#6CB8E4']}
      style={[
        {
          height: height ? height : 50,
          width: width ? width : '85%',
          borderRadius: borderRadius ? borderRadius : 12,
          alignSelf: 'center',
          backgroundColor: themeColor,
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonStyle,
      ]}>
      <TouchableOpacity
        disabled={loader}
        // style={[{
        //   height: height ? height : 50, width: width ? width : '85%',
        //   borderRadius: 12, alignSelf: 'center', backgroundColor: themeColor,
        //   justifyContent: "center", alignItems: "center"
        // }, buttonStyle]}
       >
        {loader ? (
          <ActivityIndicator
            color={loaderColor ? loaderColor : '#fff'}
            size={'large'}
          />
        ) : (
            <Text text={title} bold={true} style={{ letterSpacing: 1 }} />
          )}
      </TouchableOpacity>
    </LinearGradient>
  ) : (
      <TouchableOpacity
        disabled={loader}
        style={[
          {
            height: height ? height : 50,
            width: width ? width : '85%',
            borderRadius: borderRadius ? borderRadius : 12,
            alignSelf: 'center',
            backgroundColor: backgroundColor
              ? backgroundColor
              : themeColor,
            justifyContent: 'center',
            alignItems: 'center',
          },
          buttonStyle,
        ]}
       >
        {loader ? (
          <ActivityIndicator
            color={loaderColor ? loaderColor : '#fff'}
            size={'large'}
          />
        ) : (
            <Text text={title} bold={true} style={textStyle} />
          )}
      </TouchableOpacity>
    );
