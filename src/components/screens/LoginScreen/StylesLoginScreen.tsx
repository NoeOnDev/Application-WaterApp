import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 185,
    alignSelf: 'center',
    marginBottom: 20,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
  },
  createAccountButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: '#0071CE',
  },
  createAccountButtonText: {
    color: '#0071CE',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
