import { createSlice } from '@reduxjs/toolkit'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    activities: [{id: '1', name:'Natación', color: '#77F1F9'}, {id: '1', name:'Natación', color: '#77F1F9'}],
  },
  reducers: {
    addActivity: (state, {payload}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('addActivity:', payload)
      const act = state.activities;
      state.activities = act.push(payload)
    },
    deleteActivity: (state, { payload }) => {
      state.value -= 1
    },
    updateActivity: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addActivity, deleteActivity, updateActivity } = calendarSlice.actions


export const selectActivities = (state) => state.calendar.activities

export default calendarSlice.reducer
