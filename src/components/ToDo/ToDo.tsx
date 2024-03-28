import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import TodoItem from './ToDoItem';

const ToDo = () => {
  const [todos, setTodos] = useState([{id: '1', text: 'Örnek Todo'}]);
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    const newTodo = {id: Math.random().toString(), text: todoInput};
    setTodos([...todos, newTodo]);
    setTodoInput('');
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  function isTodoInputValid(todoInput: string) {
    return todoInput.length > 1;
  }

  const deleteTodo = (todoId: any) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const renderedTodo = ({item}: any) => (
    <TodoItem todo={item} deleteTodo={deleteTodo} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToDo</Text>
      <View style={styles.inner_container}>
        <TextInput
          style={styles.input}
          placeholder="Bir görev girin..."
          placeholderTextColor={'#34568B'}
          value={todoInput}
          onChangeText={setTodoInput}
        />
      </View>
      <TouchableOpacity
        disabled={!isTodoInputValid(todoInput)}
        style={styles.button}
        onPress={addTodo}
        activeOpacity={0.3}>
        <Text style={styles.button_text}>EKLE</Text>
      </TouchableOpacity>
      <FlatList data={todos} renderItem={renderedTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4DD',
  },
  text: {
    fontSize: 24,
    color: '#34568B',
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    color: '#34568B',
    borderColor: '#34568B',
    padding: 10,
    fontSize: 18,
    backgroundColor: '#E8E8E8',
  },
  button: {
    margin: 12,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFD662',
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#34568B',
  },
});

export default ToDo;
