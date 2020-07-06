/* eslint-disable */

import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';
import { TouchableOpacity, ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';


export default (Footer = ({

}) => {
    const rowIcon = (icon, iconType) => {
        return (
            <TouchableOpacity style={[styles.iconRow,
            icon === 'plus-circle' && { borderBottomColor: '#000', borderBottomWidth: 5 }]}>
                <Icon type={iconType ? iconType : 'font-awesome'}
                    name={icon} color={"#000"}
                    size={icon === 'plus-circle' ? 30 : 20} />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.row}>
            {rowIcon('home', 'feather')}
            {rowIcon('bell-o', undefined)}
            {rowIcon('plus-circle', 'feather')}
            {rowIcon('message-square', 'feather')}
            {rowIcon('user', 'feather')}
        </View>
    )
}
)

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 60,
        alignItems: "center",
        backgroundColor: '#fff',
        elevation: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    iconRow: {
        flex: 1, justifyContent: 'center',
        height: '98%',
        alignItems: "center", flexDirection: "row"
    },
})