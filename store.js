import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import themeReducer from './features/theme/themeSlice';
import calendarReducer from './features/calendar/calendarSlice';
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

/* const rootReducer = (state, action) => {
  if (action.type === logout.type)
    return {
      ...state,
      auth: {
        ...authInitialState,
        token: state.auth.token,
        acceptedVisitorTerms: state.auth.acceptedVisitorTerms,
        acceptedEulaTerms: state.auth.acceptedEulaTerms,
        acceptedPrivacyTerms: state.auth.acceptedPrivacyTerms,
        showLikeInfo: state.auth.showLikeInfo,
      },
      notifications: notificationsInitialState,
      visit: {
        ...visitInitialState,
        Id: state.visit.Id,
        visitStartTime: state.visit.visitStartTime,
        notesExpirationDate: state.visit.notesExpirationDate,
        currentNoteCellQr: state.visit.currentNoteCellQr,
        notes: state.visit.notes,
      },
      favorites: { ...favoritesInitialState, favorites: state.favorites.favorites },
      userRequests: userRequestsInitialState,
      brandedVarietyNames: {
        ...brandedVarietyNamesInitialState,
        customerNames: state.brandedVarietyNames.customerNames,
        myPortfolioNames: state.brandedVarietyNames.myPortfolioNames,
      },
      locations: { ...locationsInitialState, locations: state.locations.locations, lastDownloadDate: state.locations.lastDownloadDate },
      visitsScheduled: {
        ...visitsScheduledInitialState,
        visitsAndInvitations: state.visitsScheduled.visitsAndInvitations,
        plotCells: state.visitsScheduled.plotCells,
      },
      note: { ...noteInitialState, noteRatings: state.note.noteRatings },
    };
  if (action.type === 'cleanOfflineQueue')
    return {
      ...state,
      network: {
        ...state.network,
        actionQueue: action.payload.actionQueue,
      },
    };
  return combinedReducers(state, action);
}; */

const rootReducer = combineReducers({
  counter: counterReducer,
  themeState: themeReducer,
  calendar: calendarReducer,
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

/* {
  counter: counterReducer,
  themeState: themeReducer,
} */
/* export default configureStore({
  reducer:persistedReducer ,
}); */