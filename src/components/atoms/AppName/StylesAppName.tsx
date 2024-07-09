// src/components/atoms/AppName/StylesAppName.tsx
import {StyleSheet} from 'react-native';
import { colors } from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: colors.greyMedium,
  },
});
