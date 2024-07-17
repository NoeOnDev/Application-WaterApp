import React, {useState} from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Text,
  RefreshControl,
} from 'react-native';
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
import {useSendNotification} from '../../../hooks/useNotification';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';

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
  const [refreshing, setRefreshing] = useState(false);

  const queryClient = useQueryClient();

  const {
    data: streets,
    isLoading: isLoadingStreets,
    isError: isErrorStreets,
    refetch: refetchStreets,
  } = useStreets();
  const {
    data: suggestions,
    isLoading: isLoadingSuggestions,
    isError: isErrorSuggestions,
    refetch: refetchSuggestions,
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

      // Mostrar alerta de éxito
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Notificación enviada',
        textBody: 'La notificación se ha enviado correctamente.',
        button: 'Cerrar',
      });

      // Limpiar campos
      setSelectedStreets([]);
      setMessage('');
    } catch (error) {
      console.error('Error al enviar la notificación:', error);
      // Mostrar alerta de error
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Hubo un problema al enviar la notificación.',
        button: 'Cerrar',
      });
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

  const onRefresh = async () => {
    setRefreshing(true);
    await refetchStreets();
    await refetchSuggestions();
    setRefreshing(false);
  };

  return (
    <AlertNotificationRoot>
      <ScrollView
        contentContainerStyle={styles.formContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
    </AlertNotificationRoot>
  );
};
