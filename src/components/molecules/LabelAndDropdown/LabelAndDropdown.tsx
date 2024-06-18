import React from 'react';
import {View} from 'react-native';
import {LabelAuth} from '../../atoms';
import {DropdownAuth} from '../../atoms';
import {styles} from './StylesLabelAndDropdown';

interface LabelAndDropdownProps {
  label: string;
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  options: {label: string, value: string}[];
  placeholder?: string;
}

export const LabelAndDropdown: React.FC<LabelAndDropdownProps> = ({
  label,
  selectedValue,
  onValueChange,
  options,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <LabelAuth text={label} />
      <DropdownAuth
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        options={options}
        placeholder={placeholder}
      />
    </View>
  );
};
