import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './StylesSuggestionBox';

interface SuggestionBoxProps {
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
}

export const SuggestionBox: React.FC<SuggestionBoxProps> = ({
  suggestions,
  onSelectSuggestion,
}) => {
  return (
    <View style={styles.suggestionBoxContainer}>
      {suggestions.map((suggestion, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={styles.suggestionItem}
          onPress={() => onSelectSuggestion(suggestion)}>
          <Text style={styles.suggestionText}>{suggestion}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
