import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Input = ({setKeyword}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={'search'} size={20} color={'gray'} />
      <TextInput
        style={styles.input}
        placeholderTextColor={'gray'}
        placeholder="Search"
        onChangeText={text => setKeyword(text.toLowerCase())}
      />
    </View>
  );
};

export default Input;
