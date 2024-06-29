import {StyleSheet} from 'react-native';
import { colors } from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  notificationContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  streets: {
    fontSize: 14,
    color: '#555',
  },
  noHistoryMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
});
