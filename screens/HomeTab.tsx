import dayjs from 'dayjs';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { heightInt, widthInt } from '../helpers/size';
import { RootTabScreenProps } from '../types';
import Icon from '../components/reusable/icon';
import { useSelector } from 'react-redux';
import { selectActivities } from '../features/calendar/calendarSlice';
import { selectTheme } from '../features/theme/themeSlice';
import Colors from '../constants/Colors';

export default function HomeTab({ navigation }: RootTabScreenProps<'TabOne'>) {
  const days = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
  const today = dayjs().format('DD/MM/YYYY hh:ss');
  const hours = ['08','09','10', '11','12','13','14','15','16','17','18','19','20','21','22','23','00'];
  const activities = useSelector(selectActivities);
  const theme: 'dark' | 'light' = useSelector(selectTheme);

  return (
    <>
      <Text style={styles(theme).text}>{today}</Text>
      <View style={styles(theme).activitiesSection}>
        <View style={{height: heightInt(100), justifyContent:'center', backgroundColor: 'transparent'}}>
          <Text style={styles(theme).text}>
            Actividades
          </Text>
          <View style={styles(theme).iconsContainer}>
            <TouchableOpacity>
              <Icon library='Ionicons' name='add-circle' size={heightInt(180)} color={'#349405'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon library='MaterialIcons' name='delete-forever' size={heightInt(180)} color={'#D32222'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles(theme).actFlagsSection}>
          {activities.map((act, index) => (
            <View key={act.name + index} style={[styles(theme).activitiesContainer, {backgroundColor: act.color}]}>
              <Text>{act.name}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles(theme).container}>
        {days.map((day) => (
          <View key={day} style={styles(theme).column}>
            <Text style={styles(theme).title}>{day}</Text>
            {hours.map((h, index) => (
              <View key={h + index} style={[styles(theme).hourContainer, {backgroundColor: '#8CF587'}]}>
                <Text style={{ textAlign: "center" }}>{h}hs</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </>
  );
}

const styles = (theme: "dark" | "light") =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
      marginTop: heightInt(50),
    },
    title: {
      fontSize: 15,
      fontWeight: "500",
      textAlign: "center",
      borderBottomColor: "#000",
      borderBottomWidth: 1,
      color: Colors[theme].text,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
    hourContainer: {
      width: "97%",
      alignSelf: "center",
      backgroundColor: "#ddd",
      borderRadius: 15,
      marginTop: heightInt(10),
    },
    activitiesContainer: {
      width: "auto",
      alignSelf: "center",
      backgroundColor: "#ddd",
      borderRadius: 15,
      marginTop: heightInt(10),
      paddingHorizontal: widthInt(50),
      paddingVertical: heightInt(15),
      marginHorizontal: widthInt(5),
      marginVertical: heightInt(5),
    },
    activitiesSection: {
      width: "100%",
      backgroundColor: Colors[theme].backgroundRegular,
    },
    actFlagsSection: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      paddingVertical: heightInt(20),
      backgroundColor: Colors[theme].backgroundRegular,
    },
    column: {
      width: "20%",
      borderColor: "#000",
      borderWidth: 1,
      paddingBottom: heightInt(10),
      backgroundColor: Colors[theme].backgroundRegular,
    },
    text: {
      textAlign: "center",
      paddingVertical: heightInt(10),
      color: Colors[theme].text,
    },
    iconsContainer: {
      position: "absolute",
      right: widthInt(50),
      top: heightInt(10),
      display: "flex",
      flexDirection: "row",
      backgroundColor: "transparent",
    },
  });
