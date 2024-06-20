import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonAuth, InputMessage} from '../../atoms';
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

export const NotificationForm = () => {
  const [selectedStreets, setSelectedStreets] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const handleSendNotification = () => {
    console.log('Calles seleccionadas:', selectedStreets);
    console.log('Mensaje:', message);
  };

  return (
    <View style={styles.formContainer}>
      <LabelAndMultiSelect
        label="Calles"
        options={streetOptions}
        selectedValues={selectedStreets}
        onValueChange={setSelectedStreets}
        placeholder="Selecciona las calles"
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
    </View>
  );
};
