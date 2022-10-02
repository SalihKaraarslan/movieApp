import {ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Loading.styles';

const Loading = () => {
  return <ActivityIndicator style={styles.loading} size="large" />;
};

export default Loading;
