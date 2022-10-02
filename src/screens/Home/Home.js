import {Alert, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Home.styles';
import Input from '../../components/Input';
import Header from '../../components/Header';
import useFetch from '../../hooks/useFetch';
import MovieCard from '../../components/MovieCard';
import MultipleColumnMovieCard from '../../components/MultipleColumnMovieCard';
import Loading from '../../components/Loading';

import {weeklyTrendingMoviesUrl, genres} from '../../config/url';
import {getFilterGenreName} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {liked, setLiked, unLiked} from '../../redux/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [numColumns, setNumColumns] = useState(1);
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState('');

  const {loading, data: movieData, error} = useFetch(weeklyTrendingMoviesUrl);
  const {data: genreId} = useFetch(genres);

  const isLike = useSelector(state => state.like.likedMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('likedMovies');
        if (value !== null) {
          dispatch(setLiked(JSON.parse(value)));
        }
      } catch (e) {
        Alert.alert('Error', 'Something went wrong');
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const storeData = async value => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('likedMovies', jsonValue);
      } catch (e) {
        Alert.alert('Error', 'Something went wrong');
      }
    };
    storeData(isLike);
  }, [isLike]);

  const filteredMovies = movieData?.results?.filter(movie =>
    movie.original_title.toLowerCase().includes(keyword),
  );

  const iconColor = id => (isLike.includes(id) ? 'red' : 'white');

  const onLikeIconPress = id => {
    if (isLike.includes(id)) {
      dispatch(unLiked(id));
    } else {
      dispatch(liked(id));
    }
  };

  const changeColumns = () => {
    setNumColumns(numColumns === 1 ? 2 : 1);
  };

  const onMoviePress = id => {
    navigation.navigate('MovieDetail', {
      movieId: id,
    });
  };

  const renderItem = ({item}) => {
    if (numColumns !== 1) {
      return (
        <MultipleColumnMovieCard
          name={item.original_title}
          img={item.backdrop_path}
          lang={item.original_language}
          date={item.release_date}
          genre={getFilterGenreName(
            genreId?.genres,
            item.genre_ids.map(id => id),
          )}
          vote_average={item.vote_average}
          isPublic={item.adult}
          onMoviePress={() => onMoviePress(item.id)}
          onLikeIconPress={() => onLikeIconPress(item.id)}
          iconColor={iconColor(item.id)}
        />
      );
    }
    return (
      <MovieCard
        name={item.original_title}
        img={item.backdrop_path}
        lang={item.original_language}
        date={item.release_date}
        genre={getFilterGenreName(
          genreId?.genres,
          item.genre_ids.map(id => id),
        )}
        vote_average={item.vote_average}
        isPublic={item.adult}
        onMoviePress={() => onMoviePress(item.id)}
        onLikeIconPress={() => onLikeIconPress(item.id)}
        iconColor={iconColor(item.id)}
      />
    );
  };

  if (error) {
    return Alert.alert('Error', error);
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Input setKeyword={setKeyword} />
      <Header onPress={changeColumns} numColumns={numColumns} />
      <View style={styles.flatlist_container}>
        <FlatList
          key={numColumns}
          data={filteredMovies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
      </View>
    </View>
  );
};

export default Home;
