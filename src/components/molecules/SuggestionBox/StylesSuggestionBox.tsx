import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  suggestionBoxContainer: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    maxHeight: 300,
  },
  newSuggestionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    padding: 6,
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: '#0071CE',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#0071CE',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
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
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  suggestionText: {
    color: '#333',
  },
  removeButton: {
    marginLeft: 10,
    padding: 5,
  },
});
