import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
  },
  option: {
    paddingVertical: 10,
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#0071CE',
    fontWeight: 'bold',
  },
});
