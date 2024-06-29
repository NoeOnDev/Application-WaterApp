import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: colors.greyLight,
  },
  inputContainerFocused: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: colors.greyMedium,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.greyDark,
  },
  colorPlaceholder: {
    color: colors.greyMedium,
  },
  icon: {
    marginRight: 10,
    fontSize: 24,
    color: colors.greyMedium,
  },
});
