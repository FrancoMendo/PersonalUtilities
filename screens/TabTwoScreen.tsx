import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector,  } from 'react-redux';
import CheckBoxItem from '../components/reusable/CheckBoxItem';

import { Text, View } from '../components/Themed';
import { checkMustResetList } from '../features/finanzas/finanzasFns';
import { changeCostStatus, costFormat, selectMonthCosts } from '../features/finanzas/finanzasSlice';
import { selectTheme } from '../features/theme/themeSlice';
import { widthInt } from '../helpers/size';
import { ColorTheme } from '../constants/Colors';

export default function TabTwoScreen() {
  const theme: 'dark' | 'light' = useSelector(selectTheme);
  const monthCosts = useSelector(selectMonthCosts);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    checkMustResetList(monthCosts);
    setLoading(false)
  }, []);
  

  return (
    <View style={styles(theme).container}>
      <View>
        <Text style={styles(theme).title}>Finanzas</Text>
        {/* <Icon library="Ionicons" name="add-circle" size={heightInt(50)} color='#81c784'/> */}
      </View>
      <View style={{ width: "100%", display: "flex", height: "100%" }}>
        <View style={styles(theme).box}>
          <View
            style={styles(theme).separator}
            lightColor="#dedede"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles(theme).subtitle}>Done</Text>
          <View
            style={styles(theme).separator}
            lightColor="#dedede"
            darkColor="rgba(255,255,255,0.1)"
          />
          <View style={styles(theme).box}>
            {monthCosts
              ?.filter((g) => g.status)
              .map(({ status, description, valor, id }: costFormat) => (
                <CheckBoxItem
                  key={description}
                  status={status}
                  text={description}
                  data={valor}
                  onValueChange={(value: any) => dispatch(changeCostStatus({id}))}
                />
              ))}
          </View>
        </View>
        <View style={{ flex: 0.5, alignItems: "center", backgroundColor: ColorTheme[theme].background }}>
          <View
            style={styles(theme).separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles(theme).subtitle}>Gastos Mensuales</Text>
          <View style={{ width: "100%", paddingHorizontal: widthInt(25) }}>
            {monthCosts
              ?.filter((g) => g.status === false)
              .map(({ status, description, valor, id }: costFormat) => (
                <CheckBoxItem
                  key={description}
                  status={status}
                  text={description}
                  data={valor}
                  onValueChange={(value: any) => dispatch(changeCostStatus({id}))}
                />
              ))}
          </View>
          <View
            style={styles(theme).separator}
            lightColor="#dedede"
            darkColor="rgba(255,255,255,0.1)"
          />
        </View>
      </View>
    </View>
  );
}

const styles = (theme: "dark" | "light") =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: "transparent",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: ColorTheme[theme].text,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "500",
      color: ColorTheme[theme].text,
      backgroundColor: ColorTheme[theme].background,
    },
    separator: {
      marginVertical: 5,
      height: 1,
      width: "80%",
    },
    box: {
      flex: 0.5,
      alignItems: "center",
      backgroundColor: ColorTheme[theme].background,
      paddingHorizontal: widthInt(25)
    },
  });
