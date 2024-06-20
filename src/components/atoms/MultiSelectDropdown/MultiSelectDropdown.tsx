import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Modal} from 'react-native';
import {styles} from './StylesMultiSelectDropdown';

type Option = {
  label: string;
  value: string;
};

interface MultiSelectDropdownProps {
  options: Option[];
  selectedValues: string[];
  onValueChange: (selectedValues: string[]) => void;
  placeholder?: string;
}

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  selectedValues,
  onValueChange,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleSelect = (value: string) => {
    const newValue = selectedValues.includes(value)
      ? selectedValues.filter(val => val !== value)
      : [...selectedValues, value];
    onValueChange(newValue);
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setModalVisible(true)}
        style={styles.dropdown}>
        <Text>
          {selectedValues.length > 0 ? selectedValues.join(', ') : placeholder}
        </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={item => item.value}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => toggleSelect(item.value)}
                  style={styles.option}>
                  <Text
                    style={{
                      fontWeight: selectedValues.includes(item.value)
                        ? 'bold'
                        : 'normal',
                    }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
