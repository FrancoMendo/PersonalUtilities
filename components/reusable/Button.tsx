import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle } from 'react-native';
import {  heightInt, widthInt } from '../../helpers/size';
interface buttonProps{
  text?: string,
  onPress?: () => void,
  typeStyle?: "primary" | "secondary" | "red",
}
const Button = ({
  text = "Text",
  onPress = () => {},
  typeStyle = "primary",
}: buttonProps) => {
  return (
    <View >
      <TouchableOpacity style={styles[typeStyle]} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const buttonStyle: ViewStyle = {
  paddingHorizontal: widthInt(50),
  width: widthInt(300),
  borderRadius: 15,
  marginVertical: heightInt(20),
  justifyContent: "center",
  height: heightInt(70)
};
const styles = StyleSheet.create({
  primary: {
    ...buttonStyle,
    backgroundColor: '#4caf50',
  },
  secondary: {
    ...buttonStyle,
    backgroundColor: 'red',
  },
  red: {
    ...buttonStyle,
    backgroundColor: '#f44336',
  },
  text: {
    textAlign: 'center',
    fontSize: heightInt(45),
    color: '#f5f5f5',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  }
})

export default Button;