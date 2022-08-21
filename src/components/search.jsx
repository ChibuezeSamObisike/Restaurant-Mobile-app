import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from '../common/styles';

const Search = ({ setTerm }) => {
  const [input, setInput] = useState('');

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput('');
  };
  return (
    <View style={styles.container}>
      <FontAwesome name='search' size={25} />
      <TextInput
        style={styles.input}
        placeholder='Restaurants, Food'
        value={input}
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    ...elevation,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Search;
