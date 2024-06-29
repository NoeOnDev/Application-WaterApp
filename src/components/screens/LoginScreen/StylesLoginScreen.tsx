import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.white,
  },
  logo: {
    width: 160,
    height: 180,
    alignSelf: 'center',
    marginBottom: 20,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    gap: 10,
  },
  createAccountButton: {
    padding: 8,
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: colors.blueMain,
    backgroundColor: colors.white,
  },
  createAccountButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: colors.blueMain,
  },
});
