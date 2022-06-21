import { Text, View, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { heightInt, widthInt } from '../../helpers/size';

interface checkBoxParams {
  status: boolean;
  text: string;
  data: string;
  onValueChange: (status: any) => void;
}

const CheckBoxItem = ({status, text, data, onValueChange = () => {}}:checkBoxParams) => {
  return (
    <View style={styles(status).container}>
      <View style={styles().check}>
        <Checkbox value={status} onValueChange={onValueChange} />
      </View>
      <Text style={styles().textContainer}>
        {text}
      </Text> 
      <Text style={styles().dataContainer}>
        {data}
      </Text> 
    </View>
  );
}

const styles = (status?: boolean ) => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: heightInt(80),
    backgroundColor: status ? "#D9FEE2" : '#dedede',
    borderWidth: 2,
    borderColor: status ? "green" : 'grey',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: heightInt(15)
  },
  check: {
    flex: 0.2,
    alignItems: 'center'
  },
  textContainer: {
    flex: 0.5
  },
  dataContainer: {
    textAlign: 'center',
    flex: 0.3,
    fontWeight: 'bold'
  }
})

export default CheckBoxItem;