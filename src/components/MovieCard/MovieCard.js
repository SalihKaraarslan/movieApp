import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './MovieCard.styles';
import {url} from '../../config/url';
import {strings} from '../../utils/constants';
import LittleHeart from '../LittleHeart/LittleHeart';

const MovieCard = props => {
  const {
    name,
    img,
    lang,
    date,
    genre,
    vote_average,
    isPublic,
    onMoviePress,
    onLikeIconPress,
    iconColor,
  } = props;

  const {image_w780} = url;
  const movieImage = image_w780 + img;
  const movieDate = date.split('-')[0];
  const movieGenre = genre?.map((item, i) => {
    if (i === 0) {
      return item;
    } else {
      return '/' + item;
    }
  });

  const movieVote = vote_average.toFixed(1);

  return (
    <TouchableWithoutFeedback onPress={onMoviePress}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{uri: movieImage}} />
          <TouchableOpacity onPress={onLikeIconPress} style={styles.icon}>
            <LittleHeart color={iconColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.movie_info_container}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text
              style={styles.movie_info_item}>{`${movieDate} | ${lang}`}</Text>
            <Text style={styles.movie_info_item}>{movieGenre}</Text>
          </View>
          <View>
            <Text style={styles.movie_info_item}>{movieVote}</Text>
            <Text style={styles.movie_info_item}>
              {!isPublic ? strings.public : strings.adult}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
