import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  img: {
    width: '100%',
    height: 220,
  },
  icon_container: {
    position: 'absolute',
    top: 180,
    right: 10,
    padding: 10,
    borderRadius: 50,
  },
  container: {
    marginHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 0 : 40,
  },
  info_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  info_item: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 34,
    marginBottom: 10,
  },
  info_value: {
    color: '#909090',
    fontWeight: '500',
  },
  header: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 8,
  },
  read_more: {
    marginTop: 8,
    marginBottom: 8,
    color: 'red',
    alignSelf: 'flex-end',
  },
  cast_container: {
    marginTop: 8,
    flexDirection: 'row',
  },
  inner_cast_container: {
    flex: 1,
    alignItems: 'center',
    marginRight: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 30,
    marginVertical: 8,
  },
  tech_team_container: {
    marginVertical: 20,
    justifyContent: 'space-around',
  },
  tech_team: {
    marginHorizontal: 8,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
