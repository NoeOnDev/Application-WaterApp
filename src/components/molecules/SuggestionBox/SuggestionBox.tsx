import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {ButtonAuth, InputAuth} from '../../atoms';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './StylesSuggestionBox';

interface SuggestionBoxProps {
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
  onAddSuggestion: (suggestion: string) => void;
  onRemoveSuggestion: (index: number) => void;
}

export const SuggestionBox: React.FC<SuggestionBoxProps> = ({
  suggestions,
  onSelectSuggestion,
  onAddSuggestion,
  onRemoveSuggestion,
}) => {
  const [newSuggestion, setNewSuggestion] = useState('');

  const handleAddSuggestion = () => {
    if (newSuggestion.trim()) {
      onAddSuggestion(newSuggestion.trim());
      setNewSuggestion('');
    }
  };

  return (
    <View style={styles.suggestionBoxContainer}>
      <InputAuth
        value={newSuggestion}
        onChangeText={setNewSuggestion}
        placeholder="Introduce una sugerencia"
      />
      <ButtonAuth
        title="Añadir Sugerencia"
        onPress={handleAddSuggestion}
        buttonStyle={styles.addButton}
        textStyle={styles.addButtonText}
      />
      <ScrollView style={styles.suggestionList}>
        {suggestions.map((suggestion, index) => (
          <View key={index} style={styles.suggestionItemContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.suggestionItem}
              onPress={() => onSelectSuggestion(suggestion)}>
              <Text style={styles.suggestionText}>{suggestion}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.removeButton}
              onPress={() => onRemoveSuggestion(index)}>
              <Icon
                name="close"
                size={styles.removeButton.fontSize}
                color={styles.removeButton.color}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
