import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

interface DropdownProps {
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  options: {label: string, value: string}[];
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

const styles = StyleSheet.create({
  dropdownContainer: {
    marginVertical: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
