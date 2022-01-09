import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/global/styles/themes/default';
import { Navigation } from './src/navigation';
import { RootStackParamList } from './RootStackParamsList';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })
  
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Navigation />
      </ThemeProvider>
    );
  }
}
