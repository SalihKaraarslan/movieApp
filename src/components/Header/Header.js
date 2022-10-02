import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Header.styles';
import {strings} from '../../utils/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({onPress, numColumns}) => {
  const iconName = numColumns !== 1 ? 'reorder-two' : 'grid-outline';
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{strings.most_popular}</Text>
      <TouchableOpacity onPress={() => onPress()}>
        <Ionicons name={iconName} size={20} color={'gray'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
