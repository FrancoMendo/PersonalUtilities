import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { heightInt, widthInt } from "../helpers/size";
import { RootTabScreenProps } from "../types";
import Icon from "../components/reusable/icon";
import { useSelector } from "react-redux";
import { selectActivities } from "../features/calendar/calendarSlice";
import { selectTheme } from "../features/theme/themeSlice";
import Colors from "../constants/Colors";
import PopUp from "../components/reusable/PopUp";
import { Picker } from "@react-native-picker/picker";
import { Color } from "../helpers/colors";

export default function HomeTab({ navigation }: RootTabScreenProps<"TabOne">) {
  const [showPopUp, setShowPopUp] = useState(null);
  const [daySelected, setDaySelected] = useState("Lunes");
  const dayNumber = dayjs().get("d");

  const days = [
    { name: "Lunes", id: 1 },
    { name: "Martes", id: 2 },
    { name: "Miercoles", id: 3 },
    { name: "Jueves", id: 4 },
    { name: "Viernes", id: 5 },
  ];
  const today = dayjs().format("DD/MM/YYYY hh:ss");
  const hours = [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "00",
  ];
  const activities = useSelector(selectActivities);
  const theme: "dark" | "light" = useSelector(selectTheme);

  const popUpOptions = {
    add: {
      title: "Agregar actividad",
    },
    delete: {
      title: "Borrar actividad",
    },
  };
  interface props {
    type: "add" | "delete";
  }
  const openPopUp = (type: props) => {
    setShowPopUp(popUpOptions[type]);
  };

  return (
    <>
      <Text style={styles(theme).text}>{today}</Text>
      <View style={styles(theme).activitiesSection}>
        <View
          style={{
            height: heightInt(100),
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <Text style={styles(theme).text}>Actividades</Text>
          <View style={styles(theme).iconsContainer}>
            <TouchableOpacity onPress={() => openPopUp("add")}>
              <Icon
                library="Ionicons"
                name="add-circle"
                size={heightInt(180)}
                color={"#349405"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openPopUp("delete")}>
              <Icon
                library="MaterialIcons"
                name="delete-forever"
                size={heightInt(180)}
                color={"#D32222"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles(theme).actFlagsSection}>
          {activities.map((act, index) => (
            <View
              key={act.name + index}
              style={[
                styles(theme).activitiesContainer,
                { backgroundColor: act.color },
              ]}
            >
              <Text>{act.name}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles(theme).container}>
        {days.map(({ name, id }) => (
          <View key={name} style={columnStyle(id === dayNumber).container}>
            <Text style={styles(theme).title}>{name}</Text>
            {hours.map((h, index) => (
              <View
                key={h + index}
                style={[
                  styles(theme).hourContainer,
                  { backgroundColor: "#8CF587" },
                ]}
              >
                <Text style={{ textAlign: "center" }}>{h}hs</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <PopUp
        show={!!showPopUp}
        title={showPopUp?.title || ""}
        onCancell={() => setShowPopUp(null)}
      >
        <View style={{ paddingHorizontal: widthInt(40) }}>
          <Text style={styles().textBold}>Actividad</Text>
          <TextInput
            style={{
              borderColor: "#cfd8dc",
              borderWidth: 1,
              borderRadius: 15,
              paddingHorizontal: 15,
            }}
            placeholder="Nombre de actividad"
          />
          <Text style={styles().textBold}>Día 📅</Text>
          <View style={styles().pickerContainer}>
            <Picker
              onValueChange={(itemValue) => setDaySelected(itemValue)}
              mode="dropdown"
              selectedValue={daySelected}
              itemStyle={{ fontSize: heightInt(25) }}
            >
              {days.map(({ name }) => (
                <Picker.Item key={name} label={name} value={name} />
              ))}
            </Picker>
          </View>
          <Text style={styles().textBold}>Horario (24hs)</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TextInput
              style={{
                width: "30%",
                borderColor: "#cfd8dc",
                borderWidth: 1,
                borderRadius: 15,
                paddingHorizontal: 15,
              }}
              placeholder="Desde"
            />
            <TextInput
              style={{
                width: "30%",
                borderColor: "#cfd8dc",
                borderWidth: 1,
                borderRadius: 15,
                paddingHorizontal: 15,
              }}
              placeholder="Hasta"
            />
          </View>
        </View>
      </PopUp>
    </>
  );
}
const columnStyle = (currentDay: boolean = false) =>
  StyleSheet.create({
    container: {
      borderWidth: currentDay ? 2 : 0,
      borderRadius: 8,
      borderColor: Color.secondary,
      backgroundColor: "transparent",
      flex: 1,
    },
  });
const styles = (theme: "dark" | "light" = "light") =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
      marginTop: heightInt(50),
      backgroundColor: Colors[theme].background,
      flex: 1,
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
      backgroundColor: "#dddddd",
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
    textBold: {
      fontSize: heightInt(35),
      fontWeight: "bold",
      paddingVertical: heightInt(15),
      color: Colors[theme].text,
    },
    pickerContainer: {
      borderColor: "#dedede",
      borderWidth: 2,
      borderRadius: 15,
    },
  });
