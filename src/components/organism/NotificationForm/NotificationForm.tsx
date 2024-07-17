// src/components/organism/NotificationForm/NotificationForm.tsx
import React, {useState} from 'react';
import {ScrollView, ActivityIndicator, Text} from 'react-native';
import {ButtonAuth, InputMessage} from '../../atoms';
import {LabelAndMultiSelect, SuggestionBox} from '../../molecules';
import {styles} from './StylesNotificationForm';
import {useStreets} from '../../../hooks/useStreets';
import {useSuggestions} from '../../../hooks/useSuggestions';

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

  const {
    data: streets,
    isLoading: isLoadingStreets,
    isError: isErrorStreets,
  } = useStreets();
  const {
    data: suggestions,
    isLoading: isLoadingSuggestions,
    isError: isErrorSuggestions,
  } = useSuggestions();

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
    // This logic remains unchanged
  };

  const handleRemoveSuggestion = (index: number) => {
    // This logic remains unchanged
  };

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      {isLoadingStreets || isLoadingSuggestions ? (
        <ActivityIndicator />
      ) : isErrorStreets || isErrorSuggestions ? (
        <Text>Error al cargar los datos</Text>
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
            suggestions={suggestions?.map(s => s.label) || []}
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
