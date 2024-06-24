import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeScreen, ProfileScreen, HistoryScreen} from '../components/screens';

const Tab = createBottomTabNavigator();

function HomeTabsAdmin() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'help';

          if (route.name === 'HomeAdmin') {
            iconName = 'home';
          } else if (route.name === 'History') {
            iconName = 'history';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="HomeAdmin"
        component={HomeScreen}
        options={{headerShown: false, tabBarLabel: 'Inicio'}}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{headerShown: false, tabBarLabel: 'Historial'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false, tabBarLabel: 'Perfil'}}
      />
    </Tab.Navigator>
  );
}

export default HomeTabsAdmin;
