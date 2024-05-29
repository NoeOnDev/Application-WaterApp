import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    borderColor: '#cccccc',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  inputFocused: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    borderColor: '#353535',
  },
  icon: {
    marginRight: 10,
  },
});
