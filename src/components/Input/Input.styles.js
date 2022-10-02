import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#d4d4d4',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 35,
    marginLeft: 10,
    paddingTop: Platform.OS === 'ios' ? 0 : 10,
  },
});
