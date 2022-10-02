import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    alignContent: 'center',
  },
  image_container: {
    position: 'relative',
  },
  image: {
    width: 170,
    height: 200,
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    top: 6,
    right: 16,
  },
  name_container: {
    position: 'absolute',
    bottom: 42,
  },
  name: {
    marginLeft: 4,
    color: 'white',
    fontWeight: '900',
    fontSize: 18,
  },
  movie_info_item: {
    marginLeft: 4,
    textTransform: 'capitalize',
    color: '#909090',
    fontSize: 16,
  },
});
