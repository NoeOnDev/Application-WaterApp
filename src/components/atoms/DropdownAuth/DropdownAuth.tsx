import React from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './StylesDropdownAuth';

interface DropdownProps {
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  options: {label: string; value: string}[];
  placeholder?: string;
}

export const DropdownAuth: React.FC<DropdownProps> = ({
  selectedValue,
  onValueChange,
  options,
  placeholder,
}) => {
  return (
    <View style={styles.dropdownContainer}>
      <Dropdown
        style={styles.dropdown}
        data={options}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={selectedValue}
        onChange={item => {
          onValueChange(item.value);
        }}
      />
    </View>
  );
};
