import {StyleSheet} from 'react-native';
import { colors } from '../../colors';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    borderColor: '#cccccc',
    marginVertical: 10,
  },
  inputContainerFocused: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    borderColor: '#353535',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    height: 100,
    textAlignVertical: 'top',
  },
  icon: {
    marginRight: 10,
  },
});
