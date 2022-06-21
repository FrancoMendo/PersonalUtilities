import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import themeReducer from './features/theme/themeSlice';
import calendarReducer from './features/calendar/calendarSlice';
import finanzasReducer from './features/finanzas/finanzasSlice';
// Redux persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  counter: counterReducer,
  themeState: themeReducer,
  calendar: calendarReducer,
  finanzas: finanzasReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);