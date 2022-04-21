import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

export const themeSlice = createSlice({
  name: 'themeState',
  initialState: {
    theme: Appearance.getColorScheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export const selectTheme = (state) => state.themeState.theme

export default themeSlice.reducer