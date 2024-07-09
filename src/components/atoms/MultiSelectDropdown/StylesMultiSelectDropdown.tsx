// src/components/atoms/MultiSelectDropdown/StylesMultiSelectDropdown.tsx
import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    minHeight: 55,
    justifyContent: 'center',
    marginVertical: 8,
    borderColor: colors.greyLight,
  },
  dropdownFocused: {
    borderWidth: 1.3,
    padding: 10,
    borderRadius: 10,
    minHeight: 55,
    justifyContent: 'center',
    marginVertical: 8,
    borderColor: colors.greyMedium,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.greyMedium,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  boldDropdownText: {
    fontWeight: 'bold',
    color: colors.greyDark,
  },
  modalContent: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: colors.white,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: colors.greyMedium,
  },
  optionTextSelected: {
    fontWeight: 'bold',
    color: colors.greyDark,
  },
  optionIcon: {
    marginLeft: 10,
    fontSize: 20,
    color: colors.blueMain,
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
    fontSize: 16,
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.blueMain,
  },
});
