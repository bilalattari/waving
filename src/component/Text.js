/* eslint-disable */

import React, { Component } from 'react';
import { Text } from 'react-native';
export default CustomText = ({ font, align, bold, marginVertical, color, marginLeft, style, numberOfLines, text, children }) => (
    <Text style={[{
        fontSize: font ? font : 18, textAlign: align ? align : "left",
        fontWeight: bold ? "bold" : 'normal', marginVertical: marginVertical ? marginVertical : 2,
        color: color ? color : '#fff', marginLeft: marginLeft ? marginLeft : 0,
    }, style]} numberOfLines={numberOfLines ? numberOfLines : null}>{text || children}</Text>
);
