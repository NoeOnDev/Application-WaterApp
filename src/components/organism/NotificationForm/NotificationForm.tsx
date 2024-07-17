// src/components/organism/NotificationForm/NotificationForm.tsx
import React, {useState} from 'react';
import {ScrollView, ActivityIndicator, Text} from 'react-native';
import {useQueryClient} from '@tanstack/react-query';
import {ButtonAuth, InputMessage} from '../../atoms';
import {LabelAndMultiSelect, SuggestionBox} from '../../molecules';
import {styles} from './StylesNotificationForm';
import {useStreets} from '../../../hooks/useStreets';
import {
  useSuggestions,
  useCreateSuggestion,
  useDeleteSuggestion,
} from '../../../hooks/useSuggestions';
import {useSendNotification} from '../../../hooks/userNotification';

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

  const queryClient = useQueryClient();

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
  const createSuggestionMutation = useCreateSuggestion();
  const deleteSuggestionMutation = useDeleteSuggestion();
  const sendNotificationMutation = useSendNotification();

  const handleSendNotification = async () => {
    try {
      await sendNotificationMutation.mutateAsync({
        message,
        streets: selectedStreets,
      });
      const notification = {
        streets: selectedStreets,
        message,
        timestamp: new Date(),
      };
      addNotification(notification);
      console.log('Calles seleccionadas:', selectedStreets);
      console.log('Mensaje:', message);
    } catch (error) {
      console.error('Error al enviar la notificación:', error);
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setMessage(suggestion);
  };

  const handleAddSuggestion = async (suggestion: string) => {
    try {
      await createSuggestionMutation.mutateAsync({message: suggestion});
      queryClient.invalidateQueries({queryKey: ['suggestions']});
    } catch (error) {
      console.error('Error al crear la sugerencia:', error);
    }
  };

  const handleRemoveSuggestion = async (index: number) => {
    if (suggestions && suggestions[index]) {
      const suggestionToDelete = suggestions[index];
      try {
        await deleteSuggestionMutation.mutateAsync(suggestionToDelete.id);
        queryClient.invalidateQueries({queryKey: ['suggestions']});
      } catch (error) {
        console.error('Error al eliminar la sugerencia:', error);
      }
    }
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
            suggestions={suggestions || []}
            onSelectSuggestion={handleSelectSuggestion}
            onAddSuggestion={handleAddSuggestion}
            onRemoveSuggestion={id => handleRemoveSuggestion(id)}
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
