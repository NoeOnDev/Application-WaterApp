// src/components/molecules/LabelAndMultiSelect/LabelAndMultiSelect.tsx
import React from 'react';
import {View} from 'react-native';
import {LabelAuth, MultiSelectDropdown} from '../../atoms';
import {styles} from './StylesLabelAndMultiSelect';

type Option = {
  label: string;
  value: string;
};

interface LabelAndMultiSelectProps {
  label: string;
  options: Option[];
  selectedValues: string[];
  onValueChange: (selectedValues: string[]) => void;
  placeholder?: string;
}

export const LabelAndMultiSelect: React.FC<LabelAndMultiSelectProps> = ({
  label,
  options,
  selectedValues,
  onValueChange,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <LabelAuth text={label} />
      <MultiSelectDropdown
        options={options}
        selectedValues={selectedValues}
        onValueChange={onValueChange}
        placeholder={placeholder}
      />
    </View>
  );
};
