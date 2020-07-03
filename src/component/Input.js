import React, {Component} from 'react';
import {Input, Icon} from 'react-native-elements';
import {themeColor} from '../Constant';
import {StyleSheet} from 'react-native';

export default (CustomInput = ({
  containerStyle,
  inputContainerStyle,
  keyboardType,
  placeholder,
  value,
  multiline,
  secureTextEntry,
  textChange,
  icon,
}) => (
  <Input
    containerStyle={[styles.inputContainer, containerStyle]}
    inputContainerStyle={[styles.container, , inputContainerStyle]}
    inputStyle={{
      fontSize: 16,
      borderColor: '#A5A2A2',
      borderWidth: 0.5,
      paddingLeft: 12,
    }}
    keyboardType={keyboardType ? keyboardType : 'default'}
    placeholder={placeholder}
    placeholderTextColor={'#A5A2A2'}
    labelStyle={{color: themeColor, paddingBottom: 8}}
    value={value}
    multiline={multiline}
    secureTextEntry={secureTextEntry}
    onChangeText={text => textChange && textChange(text)}
    errorStyle={{color: 'red'}}
    leftIcon={
      icon ? (
        <Icon
          name={props.icon}
          size={16}
          type={'font-awesome'}
          color="#909291"
        />
      ) : null
    }
    leftIconContainerStyle={{padding: 0}}
  />
));

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginLeft: -8,
    height: 60,
    margin: 0,
    padding: 0,
    marginVertical: 0,
  },
  container: {
    borderWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    width: '90%',
    alignSelf: 'center',
    marginTop: 8,
  },
});
