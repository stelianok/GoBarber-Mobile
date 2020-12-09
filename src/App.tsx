import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes';
import AppProvider from './hooks';
const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={'#312e38'} />
      <AppProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AppProvider>

    </>
  )
};

export default App;
