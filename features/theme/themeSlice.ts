import { createSlice } from "@reduxjs/toolkit";
import { Appearance, ColorSchemeName } from "react-native";
import { StoreState } from "../../store";
interface themeSliceStateType {
  theme: 'dark' | 'light';
}
const initialState: themeSliceStateType = {
  theme: Appearance.getColorScheme() || 'light',
};
export const themeSlice = createSlice({
  name: "themeState",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: StoreState) => state.themeState.theme;

export default themeSlice.reducer;
