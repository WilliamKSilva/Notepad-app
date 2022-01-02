import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/global/styles/themes/default';
import { Navigation } from './src/navigation';
import { RootStackParamList } from './RootStackParamsList';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
    </ThemeProvider>
  );
}
