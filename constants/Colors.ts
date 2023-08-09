import { StyleSheet } from "react-native";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const ColorTheme = {
  light: {
    text: "#000",
    background: "#fff",
    backgroundRegular: "#f6f6f6",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#242526",
    backgroundRegular: "#242526",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export const StylesGlobal = (theme: "light" | "dark") => StyleSheet.create({
  txt: {
    color: ColorTheme[theme].text,
  }
});
