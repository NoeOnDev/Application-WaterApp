// src/container/HomeTabsUser.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NotificationUserScreen, ProfileScreen} from '../components/screens';

const Tab = createBottomTabNavigator();

function HomeTabsUser() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'help';

          if (route.name === 'Notifications') {
            iconName = 'notifications';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Notifications"
        component={NotificationUserScreen}
        options={{headerShown: false, tabBarLabel: 'Notificaciones'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false, tabBarLabel: 'Perfil'}}
      />
    </Tab.Navigator>
  );
}

export default HomeTabsUser;
