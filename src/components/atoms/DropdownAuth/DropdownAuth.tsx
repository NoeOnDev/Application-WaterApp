import React, {useState} from 'react';
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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={
        isFocused ? styles.dropdownContainerFocused : styles.dropdownContainer
      }>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.dropdownMenu}
        itemTextStyle={styles.dropdownItemText}
        selectedTextStyle={styles.selectedDropdownItemText}
        data={options}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={selectedValue}
        onChange={item => {
          onValueChange(item.value);
          setIsFocused(false);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};
