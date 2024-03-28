import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TodoItem = ({todo, deleteTodo}: any) => {
  function removeTodo() {
    return Alert.alert('Görevi sil', 'Bu görevi silmek istiyor musunuz', [
      {
        text: 'İptal Et',
        style: 'cancel',
      },
      {text: 'SİL', onPress: () => deleteTodo(todo.id)},
    ]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={removeTodo} style={styles.button}>
        <Text style={styles.text}>{todo.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderBottomWidth: 1,
    borderBottomColor: '#D9E4DD',
    padding: 10,
  },
  text: {
    fontSize: 18,
    flex: 1,
    color: '#FFD662',
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3F72AF',
    marginLeft: 10,
  },
});

export default TodoItem;
