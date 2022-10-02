import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import {useRoute} from '@react-navigation/native';
import styles from './MovieDetail.styles';
import Heart from '../../components/Heart';
import {url} from '../../config/url';
import {useDispatch, useSelector} from 'react-redux';
import {liked, unLiked} from '../../redux/slice';
import {
  arrangement,
  covertedRuntime,
  strings,
  truncateName,
} from '../../utils/constants';
import Loading from '../../components/Loading';

const MovieDetail = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const isLike = useSelector(state => state.like.likedMovies);
  const {baseUrl, apiKey, image_w780} = url;
  const {movieId} = route.params;

  const movieDetailApi = `${baseUrl}movie/${movieId}${apiKey}`;
  const creditsDataApi = `${baseUrl}movie/${movieId}/credits${apiKey}`;

  const {loading, data, error} = useFetch(movieDetailApi);
  const {data: creditsData} = useFetch(creditsDataApi);

  const onLikeIconPress = id => {
    if (isLike.includes(id)) {
      dispatch(unLiked(id));
    } else {
      dispatch(liked(id));
    }
  };

  const backgroundColor = isLike.includes(movieId) ? 'red' : '#909090';
  const movieImage = image_w780 + data?.backdrop_path;
  const mainTechTeam = creditsData?.crew?.slice(0, 3);
  const mainCast = creditsData?.cast?.slice(0, 3);

  if (error) {
    return Alert.alert('Error', error);
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.img} source={{uri: movieImage}} />
        <TouchableOpacity
          onPress={() => onLikeIconPress(movieId)}
          style={[styles.icon_container, {backgroundColor: backgroundColor}]}>
          <Heart />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.info_container}>
            <View>
              <Text style={styles.info_item}>{strings.duration}</Text>
              <Text style={styles.info_value}>
                {covertedRuntime(data?.runtime)}
              </Text>
            </View>
            <View>
              <Text style={styles.info_item}>{strings.genre}</Text>
              {data?.genres?.map((genre, i) => (
                <Text key={i} style={styles.info_value}>
                  {arrangement(data?.genres, genre.name, i)}
                </Text>
              ))}
            </View>
            <View>
              <Text style={styles.info_item}>{strings.language}</Text>
              {data?.spoken_languages?.map((lang, i) => (
                <Text key={i} style={styles.info_value}>
                  {arrangement(data?.spoken_languages, lang.english_name, i)}
                </Text>
              ))}
            </View>
          </View>
          <Text style={styles.header}>{strings.synopsis}</Text>
          <Text style={styles.info_value} numberOfLines={3}>
            {data.overview}
          </Text>
          <TouchableOpacity>
            <Text style={styles.read_more}>{strings.read_more}</Text>
          </TouchableOpacity>
          <Text style={styles.header}>{strings.main_cast}</Text>
          <View style={styles.cast_container}>
            {mainCast?.map((actor, i) => (
              <View key={i} style={styles.inner_cast_container}>
                <Text style={styles.info_value} numberOfLines={1}>
                  {truncateName(actor.name, 12)}
                </Text>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: image_w780 + actor.profile_path,
                  }}
                />
                <Text style={styles.info_value} numberOfLines={1}>
                  {truncateName(actor.character, 12)}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.tech_team_container}>
            <Text style={styles.header}>{strings.main_technical_team}</Text>
            <View style={styles.tech_team}>
              {mainTechTeam?.map((tech, i) => (
                <Text key={i} style={styles.info_value} numberOfLines={1}>
                  {truncateName(tech.name, 12)}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetail;
