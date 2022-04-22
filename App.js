import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';


export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <StatusBar />
            <Navigation />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
