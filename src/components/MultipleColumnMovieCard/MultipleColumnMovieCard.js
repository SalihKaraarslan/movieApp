import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './MultipleColumnMovieCard.styles';
import {url} from '../../config/url';
import LittleHeart from '../LittleHeart/LittleHeart';

const MultipleColumnMovieCard = props => {
  const {
    name,
    img,
    lang,
    date,
    genre,
    onMoviePress,
    onLikeIconPress,
    iconColor,
  } = props;

  const {image_w780} = url;
  const movieImage = image_w780 + img;
  const movieDate = date.split('-')[0];
  const slicedGenre = genre?.slice(0, 2);
  const movieGenre = slicedGenre?.map((item, i) => {
    if (i === 0) {
      return item;
    } else {
      return '/' + item;
    }
  });

  return (
    <TouchableWithoutFeedback onPress={onMoviePress}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{uri: movieImage}} />
          <TouchableOpacity onPress={onLikeIconPress} style={styles.icon}>
            <LittleHeart color={iconColor} />
          </TouchableOpacity>
          <View style={styles.name_container}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <Text style={styles.movie_info_item}>{`${movieDate} | ${lang}`}</Text>
          <Text style={styles.movie_info_item}>{movieGenre}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MultipleColumnMovieCard;
