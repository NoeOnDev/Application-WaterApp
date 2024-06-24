import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  HomeScreen,
  ProfileScreen,
  HistoryScreen,
  SendNoticesScreen,
} from '../components/screens';

const Tab = createBottomTabNavigator();

interface Notification {
  streets: string[];
  message: string;
  timestamp: Date;
}

function HomeTabsAdmin() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Notification) => {
    setNotifications(prevNotifications => [...prevNotifications, notification]);
  };

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
          } else if (route.name === 'SendNotices') {
            iconName = 'send';
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
        name="SendNotices"
        options={{headerShown: false, tabBarLabel: 'Enviar Avisos'}}>
        {props => (
          <SendNoticesScreen {...props} addNotification={addNotification} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="History"
        options={{headerShown: false, tabBarLabel: 'Historial'}}>
        {props => <HistoryScreen {...props} notifications={notifications} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false, tabBarLabel: 'Perfil'}}
      />
    </Tab.Navigator>
  );
}

export default HomeTabsAdmin;
