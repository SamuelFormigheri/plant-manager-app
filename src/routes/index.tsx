import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './stack.routes';

const AppRoutes: React.FC = () => {
  return(
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
  );
}

export default AppRoutes;