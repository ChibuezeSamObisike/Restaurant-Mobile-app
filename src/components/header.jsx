import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>Delicious Meal!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 60, marginHorizontal: 25 },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,

    fontWeight: 'bold',
  },
});

export default Header;
