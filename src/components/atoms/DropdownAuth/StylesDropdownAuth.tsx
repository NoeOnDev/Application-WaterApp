import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dropdownContainer: {
    height: 55,
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    borderColor: '#cccccc',
    marginVertical: 8,
  },
  dropdownContainerFocused: {
    height: 55,
    borderWidth: 1.3,
    padding: 5,
    borderRadius: 10,
    borderColor: '#353535',
    marginVertical: 8,
  },
  dropdown: {
    flex: 1,
    fontSize: 16,
  },
  dropdownMenu: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  dropdownItemText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    // color: '#353535',
  },
  selectedDropdownItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: '#0071CE',
  },
  placeholderStyle: {
    // color: '#999999',
  },
});
