import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = (props: any) => {
  function navigateToToDo() {
    props.navigation.navigate('ToDo');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToToDo}>
        <Text style={styles.text}>ToDo'ya Git</Text>
      </TouchableOpacity>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9E4DD',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#34568B',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    width: 200,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFD662',
  },
});

export default HomeScreen;
