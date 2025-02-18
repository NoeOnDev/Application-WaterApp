// src/components/atoms/MultiSelectDropdown/MultiSelectDropdown.tsx
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  const [modalVisible, setModalVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
        onPress={() => {
          setModalVisible(true);
          setIsFocused(true);
        }}
        style={isFocused ? styles.dropdownFocused : styles.dropdown}>
        <Text
          style={[
            styles.dropdownText,
            selectedValues.length > 0 && styles.boldDropdownText,
          ]}>
          {selectedValues.length > 0 ? selectedValues.join(', ') : placeholder}
        </Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(false);
          setIsFocused(false);
        }}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={item => item.value}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => toggleSelect(item.value)}
                  style={styles.option}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedValues.includes(item.value) &&
                        styles.optionTextSelected,
                    ]}>
                    {item.label}
                  </Text>
                  {selectedValues.includes(item.value) && (
                    <Icon
                      name="check-circle"
                      size={styles.optionIcon.fontSize}
                      color={styles.optionTextSelected.color}
                      style={styles.optionIcon}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setModalVisible(false);
                setIsFocused(false);
              }}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
