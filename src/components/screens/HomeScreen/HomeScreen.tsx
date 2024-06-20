import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {LabelAndMultiSelect} from '../../molecules';
import {styles} from './StylesHomeScreen';

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

export function HomeScreen() {
  const [selectedStreets, setSelectedStreets] = useState<string[]>([]);

  const handleSendNotification = () => {
    console.log('Calles seleccionadas:', selectedStreets);
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
      <Button title="Enviar Notificación" onPress={handleSendNotification} />
    </View>
  );
}
