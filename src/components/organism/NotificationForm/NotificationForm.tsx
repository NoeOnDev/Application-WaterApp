import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {ButtonAuth, InputMessage, SuggestionBox} from '../../atoms';
import {LabelAndMultiSelect} from '../../molecules';
import {styles} from './StylesNotificationForm';

const streetOptions = [
  {label: 'ARANDANOS', value: 'arandanos'},
  {label: 'AZULEJO', value: 'azulejo'},
  {label: 'BOSQUES', value: 'bosques'},
  {label: 'CALLEJON', value: 'callejon'},
  {label: 'CAMELIA', value: 'camelia'},
  {label: 'CANELA', value: 'canela'},
  {label: 'CEREZO', value: 'cerezo'},
  {label: 'CIPRES', value: 'cipres'},
  {label: 'COLIBRI', value: 'colibri'},
  {label: 'DURAZNO', value: 'durazno'},
  {label: 'ENCINO', value: 'encino'},
  {label: 'ESMERALDA', value: 'esmeralda'},
];

const messageSuggestions = [
  'A tu calle se le suministrará agua el próximo lunes.',
  'Por problemas de mantenimiento, se suspenderá el servicio de agua el día de mañana.',
  'Se le esta suministrando agua a tu calle.',
  'Se ha reportado un corte de agua para mañana en tu calle.',
  'Se ha reportado un corte de agua para hoy en tu calle.',
];

export const NotificationForm = () => {
  const [selectedStreets, setSelectedStreets] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const handleSendNotification = () => {
    console.log('Calles seleccionadas:', selectedStreets);
    console.log('Mensaje:', message);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      <LabelAndMultiSelect
        label="Calles"
        options={streetOptions}
        selectedValues={selectedStreets}
        onValueChange={setSelectedStreets}
        placeholder="Selecciona las calles"
      />
      <SuggestionBox
        suggestions={messageSuggestions}
        onSelectSuggestion={handleSelectSuggestion}
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
    </ScrollView>
  );
};
