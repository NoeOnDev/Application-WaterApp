// src/components/organism/NotificationForm/NotificationForm.tsx
import React, {useState} from 'react';
import {ScrollView, ActivityIndicator, Text} from 'react-native';
import {ButtonAuth, InputMessage} from '../../atoms';
import {LabelAndMultiSelect, SuggestionBox} from '../../molecules';
import {styles} from './StylesNotificationForm';
import {useStreets} from '../../../hooks/useStreets';

const initialMessageSuggestions = [
  'A tu calle se le suministrará agua el próximo lunes.',
  'Por problemas de mantenimiento, se suspenderá el servicio de agua el día de mañana.',
  'Se le está suministrando agua a tu calle.',
  'Se ha reportado un corte de agua para mañana en tu calle.',
  'Se ha reportado un corte de agua para hoy en tu calle.',
];

interface Notification {
  streets: string[];
  message: string;
  timestamp: Date;
}

interface NotificationFormProps {
  addNotification: (notification: Notification) => void;
}

export const NotificationForm: React.FC<NotificationFormProps> = ({
  addNotification,
}) => {
  const [selectedStreets, setSelectedStreets] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [messageSuggestions, setMessageSuggestions] = useState(
    initialMessageSuggestions,
  );

  const {data: streets, isLoading, isError} = useStreets();

  const handleSendNotification = () => {
    const notification = {
      streets: selectedStreets,
      message,
      timestamp: new Date(),
    };
    addNotification(notification);
    console.log('Calles seleccionadas:', selectedStreets);
    console.log('Mensaje:', message);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setMessage(suggestion);
  };

  const handleAddSuggestion = (suggestion: string) => {
    setMessageSuggestions(prevSuggestions => [...prevSuggestions, suggestion]);
  };

  const handleRemoveSuggestion = (index: number) => {
    setMessageSuggestions(prevSuggestions =>
      prevSuggestions.filter((_, i) => i !== index),
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : isError ? (
        <Text>Error al cargar las calles</Text>
      ) : (
        <>
          <LabelAndMultiSelect
            label="Calles"
            options={streets || []}
            selectedValues={selectedStreets}
            onValueChange={setSelectedStreets}
            placeholder="Selecciona las calles"
          />
          <SuggestionBox
            suggestions={messageSuggestions}
            onSelectSuggestion={handleSelectSuggestion}
            onAddSuggestion={handleAddSuggestion}
            onRemoveSuggestion={handleRemoveSuggestion}
          />
          <InputMessage
            value={message}
            onChangeText={setMessage}
            placeholder="Introduce el mensaje"
          />
          <ButtonAuth
            title="Enviar Notificación"
            onPress={handleSendNotification}
          />
        </>
      )}
    </ScrollView>
  );
};
