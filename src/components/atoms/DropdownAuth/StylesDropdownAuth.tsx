import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  dropdownContainer: {
    height: 55,
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    marginVertical: 8,
    borderColor: colors.greyLight,
  },
  dropdownContainerFocused: {
    height: 55,
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    marginVertical: 8,
    borderColor: colors.greyMedium,
  },
  dropdown: {
    flex: 1,
    fontSize: 16,
  },
  dropdownMenu: {
    marginTop: 5,
    elevation: 3,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: {width: 0, height: 2},
    zIndex: 1000,
    shadowColor: colors.black,
  },
  dropdownItemText: {
    fontSize: 16,
    color: colors.greyMedium,
  },
  selectedDropdownItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 3,
    color: colors.greyDark,
  },
  placeholderStyle: {
    color: colors.greyMedium,
  },
});
