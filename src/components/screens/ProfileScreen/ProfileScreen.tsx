// src/components/screens/ProfileScreen/ProfileScreen.tsx
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {ButtonAuth} from '../../atoms';
import {SafeArea} from '../../organism';
import {RootStackParamList} from '../../../types/types';
import {styles} from './StylesProfileScreen';

export const ProfileScreen = () => {
  const [email, setEmail] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const retrieveEmail = async () => {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      if (storedEmail) {
        setEmail(storedEmail);
      }
    };
    retrieveEmail();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userRole');
    await AsyncStorage.removeItem('userEmail');
    navigation.navigate('Login');
  };

  return (
    <SafeArea>
      <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        {email && <Text style={styles.email}>Email: {email}</Text>}
        <ButtonAuth
          title="Cerrar sesión"
          onPress={handleLogout}
          buttonStyle={styles.logoutButton}
        />
      </View>
    </SafeArea>
  );
};
