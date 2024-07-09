// src/components/molecules/SuggestionBox/StylesSuggestionBox.tsx
import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  suggestionBoxContainer: {
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 10,
    paddingTop: 5,
    paddingHorizontal: 15,
    maxHeight: 300,
    borderColor: colors.greyLight,
  },
  addButton: {
    marginBottom: 10,
  },
  addButtonText: {},
  suggestionList: {
    flexGrow: 0,
  },
  suggestionItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  suggestionItem: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.whiteMedium,
  },
  suggestionText: {
    color: colors.greyDark,
  },
  removeButton: {
    marginLeft: 5,
    fontSize: 20,
    color: colors.red,
  },
});
