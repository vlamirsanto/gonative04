import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const Loading = () => (
  <View style={styles.contentLoading}>
    <ActivityIndicator size="small" color="#999" style={styles.loading} />
  </View>
);

export default Loading;
