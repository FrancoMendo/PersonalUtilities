import dayjs from 'dayjs';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { heightInt } from '../helpers/size';
import { RootTabScreenProps } from '../types';


export default function HomeTab({ navigation }: RootTabScreenProps<'TabOne'>) {
  const days = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
  const today = dayjs().format('DD/MM/YYYY hh:ss');

  return (<>
    <Text style={styles.dateText}>{today}</Text>
    <View style={styles.container}>
      {days.map(day => (
        <View key={day} style={styles.column}>
          <Text style={styles.title}>{day}</Text>
        </View>
      ))}
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  column: {
    width: '20%',
    borderColor: '#000',
    borderWidth: 1,
    height: '80%'
  },
  dateText:{
    textAlign: 'center',
    paddingVertical: heightInt(10),
  }
});
