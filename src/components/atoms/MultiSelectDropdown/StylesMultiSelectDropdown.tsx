import {StyleSheet} from 'react-native';
import { colors } from '../../colors';

export const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    minHeight: 55,
    justifyContent: 'center',
    marginVertical: 8,
  },
  dropdownFocused: {
    borderWidth: 1.3,
    borderColor: '#353535',
    padding: 10,
    borderRadius: 10,
    minHeight: 55,
    justifyContent: 'center',
    marginVertical: 8,
  },
  dropdownText: {
    fontSize: 16,
    // color: '#353535',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  boldDropdownText: {
    // color: '#0071CE',
    fontWeight: 'bold',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    // color: '#353535',
  },
  optionTextSelected: {
    fontWeight: 'bold',
  },
  optionIcon: {
    marginLeft: 10,
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
    fontSize: 16,
  },
  closeButtonText: {
    // color: '#0071CE',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
