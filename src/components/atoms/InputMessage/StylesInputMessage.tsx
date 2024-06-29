import {StyleSheet} from 'react-native';
import { colors } from '../../colors';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: colors.greyLight,
  },
  inputContainerFocused: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: colors.greyMedium,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 100,
    color: colors.greyDark,
  },
  colorPlaceholder: {
    color: colors.greyMedium,
  },
  icon: {
    marginRight: 10,
    marginTop: 5,
    fontSize: 24,
    color: colors.greyMedium,
  },
});
