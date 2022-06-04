import React, { ReactComponentElement } from 'react';
import { Modal, StyleProp, StyleSheet, View, ViewStyle, Text, TouchableOpacity } from 'react-native';
import { heightInt } from '../../helpers/size';
import Button from './Button';

interface PopUpProps {
  show?: boolean;
  modalStyle?: ViewStyle;
  cardStyle?: ViewStyle;
  title?: string;
  titleStyle?: ViewStyle;
  subtitle?: string;
  subtitleStyle?: ViewStyle;
}
const PopUp = ({
  show = true,
  modalStyle,
  cardStyle,
  title = "Title",
  titleStyle,
  subtitle = "subtitle",
  subtitleStyle,
}: PopUpProps) => {
  return (
    <>
      {/* <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', flex: 1 }}> */}
      <Modal visible={show} style={{ flex: 1 }} transparent={true}>
        <View style={[styles.modalStyle, modalStyle]}>
          <View style={[styles.card, cardStyle]}>
            <Text style={[styles.textTitle, titleStyle]}>{title}</Text>
            <Text style={[styles.textSubtitle, subtitleStyle]}>{subtitle}</Text>
            <View style={[styles.buttonsContainer]}>
              <Button text={"button 1"}/>
              <Button text={"button 2"}/>
            </View>
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1, 
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  card: {
    paddingVertical: heightInt(50),
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 15,
    zIndex: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: heightInt(50)
  },
  textSubtitle: {
    textAlign: 'center',
    fontSize: heightInt(35)
  },
  buttonsContainer: {
    height: heightInt(100),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default PopUp;