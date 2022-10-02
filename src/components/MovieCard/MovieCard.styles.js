import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  image_container: {
    position: 'relative',
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
  movie_info_container: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  movie_info_item: {
    textTransform: 'capitalize',
    color: '#909090',
    fontSize: 16,
    fontFamily: 'Avenir-Medium',
  },
});
