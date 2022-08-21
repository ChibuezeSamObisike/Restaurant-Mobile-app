import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CategoryItem from './categoryItem';

const Categories = ({ categories, setTerm, term }) => {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }, index) => {
        return (
          <CategoryItem
            {...item}
            key={index}
            index={index}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />
        );
      }}
      keyExtractor={(item) => item.name}
    />
  );
};

const styles = StyleSheet.create({});

export default Categories;
