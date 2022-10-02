import {View} from 'react-native';
import React from 'react';
import styles from './LittleHeart.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LittleHeart = ({color = 'white'}) => {
  const iconName = color === 'red' ? 'md-heart-sharp' : 'heart-outline';
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={20} color={color} />
    </View>
  );
};

export default LittleHeart;
