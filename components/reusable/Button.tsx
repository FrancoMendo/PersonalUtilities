import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {  heightInt, widthInt } from '../../helpers/size';

const Button = ({text='Text'}) => {
  return (
    <TouchableOpacity style={styles.primaryType}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryType: {
    paddingHorizontal: widthInt(50),
    backgroundColor: 'green',
    height: heightInt(50),
    width: widthInt(300),
    borderRadius: 15,
    marginVertical: heightInt(10)
  }
})

export default Button;