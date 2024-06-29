import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.greyDark,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
    color: colors.greyDark,
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: colors.red,
  },
});
