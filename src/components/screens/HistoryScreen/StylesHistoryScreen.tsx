// src/components/screens/HistoryScreen/StylesHistoryScreen.tsx
import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: colors.white,
  },
  notificationContainer: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.whiteMedium,
  },
  timestamp: {
    fontSize: 12,
    color: colors.blueMain,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.greyDark,
  },
  streets: {
    fontSize: 14,
    color: colors.greyDark,
  },
  noHistoryMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: colors.greyMedium,
  },
});
