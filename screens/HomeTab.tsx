import dayjs from 'dayjs';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { Text, View } from '../components/Themed';
import { heightInt, widthInt } from '../helpers/size';
import { RootTabScreenProps } from '../types';
import Icon from '../components/reusable/icon';

export default function HomeTab({ navigation }: RootTabScreenProps<'TabOne'>) {
  const days = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
  const today = dayjs().format('DD/MM/YYYY hh:ss');
  const hours = ['08','09','10', '11','12','13','14','15','16','17','18','19','20','21','22','23','00'];
  const activities = [{name:'Natación', color: '#77F1F9'}];

  return (
    <>
      <Text style={styles.text}>{today}</Text>
      <View style={{height: heightInt(100), justifyContent:'center'}}>
        <Text style={styles.text}>
          Actividades
        </Text>
        <View style={{position: 'absolute', right: widthInt(50), top: heightInt(10), display: 'flex', flexDirection:'row'}}>
          <TouchableOpacity>
            <Icon library='Ionicons' name='add-circle' size={heightInt(180)} color={'#349405'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon library='MaterialIcons' name='delete-forever' size={heightInt(180)} color={'#D32222'} />
          </TouchableOpacity>
        </View>
      </View>
      {activities.map((act, index) => (
        <View key={act.name + index} style={[styles.activitiesContainer, {backgroundColor: act.color}]}>
          <Text>{act.name}</Text>
        </View>
      ))}
      <View style={styles.container}>
        {days.map((day) => (
          <View key={day} style={styles.column}>
            <Text style={styles.title}>{day}</Text>
            {hours.map((h, index) => (
              <View key={h + index} style={[styles.hourContainer, {backgroundColor: '#8CF587'}]}>
                <Text style={{ textAlign: "center" }}>{h}hs</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: heightInt(50)
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  hourContainer:{
    width: '97%',
    alignSelf:'center',
    backgroundColor: '#ddd',
    borderRadius: 15,
    marginTop: heightInt(10),
  },
  activitiesContainer:{
    width: 'auto',
    alignSelf:'center',
    backgroundColor: '#ddd',
    borderRadius: 15,
    marginTop: heightInt(10),
    paddingHorizontal: widthInt(50),
    paddingVertical: heightInt(15),
  },
  column: {
    width: "20%",
    borderColor: "#000",
    borderWidth: 1,
    paddingBottom: heightInt(10),
  },
  text: {
    textAlign: "center",
    paddingVertical: heightInt(10),
  },
  containerDrax: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  draggable: {
    width: 100,
    height: 100,
    backgroundColor: "#000",
  },
  receiver: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
});
