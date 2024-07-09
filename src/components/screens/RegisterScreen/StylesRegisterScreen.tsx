// src/components/screens/RegisterScreen/StylesRegisterScreen.tsx
import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  linkText: {
    textAlign: 'center',
    marginVertical: 20,
    color: colors.blueMain,
  },
});
