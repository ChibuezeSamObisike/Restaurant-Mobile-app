import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Restaurants = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Top Restuarants </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 20,
    height: 100,
  },
});

export default Restaurants;
