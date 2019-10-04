import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const exampleList = [
    { name: 'ChildCare1', location: 'Chico' },
    { name: 'ChildCare2', location: 'San Luis Obispo' },
    { name: 'ChildCare3', location: 'Sacramento' },
    { name: 'ChildCare4', location: 'San Francisco' },
    { name: 'ChildCare5', location: 'Long Beach' }
  ];

  return (
    <FlatList
      keyExtractor={(facility) => facility.name}
      data={exampleList}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.location}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({

  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
