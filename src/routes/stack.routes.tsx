import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import colors from '../styles/colors';

import Confirmation from '../pages/Confirmation';
import Landing from '../pages/Landing';
import UserEntry from '../pages/UserEntry';
import PlantDetails from '../pages/PlantDetails';
import TabRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
        cardStyle: {
            backgroundColor: colors.white
        }
    }}
  >
      <stackRoutes.Screen name="Landing" component={Landing} />
      <stackRoutes.Screen name="UserEntry" component={UserEntry} />
      <stackRoutes.Screen name="Confirmation" component={Confirmation} />
      <stackRoutes.Screen name="Dashboard" component={TabRoutes} />
      <stackRoutes.Screen name="PlantDetails" component={PlantDetails} />
      <stackRoutes.Screen name="MyPlants" component={TabRoutes} />
 </stackRoutes.Navigator>
);
}

export default StackRoutes;