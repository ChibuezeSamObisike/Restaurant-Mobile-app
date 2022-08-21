import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Search from './src/components/search';
import CategoryItem from './src/components/categoryItem';
import { useState } from 'react';
import Categories from './src/components/categories';
import Restaurants from './src/components/restaurants';

export default function App() {
  const [term, setTerm] = useState('');
  const commonCategories = [
    {
      name: 'Burger',
      imageUrl: require('./src/assets/images/burger.png'),
    },
    {
      name: 'Pizza',
      imageUrl: require('./src/assets/images/pizza.png'),
    },
    {
      name: 'Desert',
      imageUrl: require('./src/assets/images/cake.png'),
    },
    {
      name: 'Drink',
      imageUrl: require('./src/assets/images/smoothies.png'),
    },
    {
      name: 'Steak',
      imageUrl: require('./src/assets/images/steak.png'),
    },
    {
      name: 'Pasta',
      imageUrl: require('./src/assets/images/pasta.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories setTerm={setTerm} categories={commonCategories} term={term} />
      <Restaurants />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
