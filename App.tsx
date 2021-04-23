import 'react-native-gesture-handler';
import React from 'react';
import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import SharedProvider from './src/context/global';
import AppRoutes from './src/routes';

const App = () => {
  const [fonts] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  });

  if(!fonts)
    return <AppLoading />

  return <SharedProvider>
            <AppRoutes />
          </SharedProvider>
};

export default App;
