import {Text, View} from 'react-native';
import React from 'react';
import styles from './Account.styles';
import {strings} from '../../utils/constants';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text>{strings.account}</Text>
    </View>
  );
};

export default Account;
