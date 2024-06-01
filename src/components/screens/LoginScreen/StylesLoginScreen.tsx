import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    zIndex: 1,
  },
  logo: {
    width: 140,
    height: 170,
    alignSelf: 'center',
    marginBottom: 20,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    gap: 10,
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
    fontWeight: '600',
  },
});
