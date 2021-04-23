import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import Dashboard from '../pages/Dashboard';
import { MaterialIcons } from '@expo/vector-icons';
import MyPlants from '../pages/MyPlants';

const Tabs = createBottomTabNavigator();

const TabRoutes: React.FC = ({children}) => {
  return (
     <Tabs.Navigator 
        tabBarOptions={{
            activeTintColor: colors.green,
            inactiveTintColor: colors.heading,
            labelPosition: 'beside-icon',
            style: {
                paddingVertical: 20,
                height: 88
            }
        }}
     >
        <Tabs.Screen name="Dashboard" component={Dashboard} 
            options={{
                tabBarIcon: (({size, color}) => (
                    <MaterialIcons 
                        name="add-circle-outline"
                        size={size}
                        color={color}
                    />
                ))
            }}
        />
        <Tabs.Screen name="My Plants" component={MyPlants} 
            options={{
                tabBarIcon: (({size, color}) => (
                    <MaterialIcons 
                        name="format-list-bulleted"
                        size={size}
                        color={color}
                    />
                ))
            }}
        />
     </Tabs.Navigator> 
  );
}

export default TabRoutes;