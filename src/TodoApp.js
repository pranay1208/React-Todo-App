import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleList from './containers/VisibleList';

class TodoApp extends Component{
    render(){
        return (
            <View style={styles.container}>
                <AddTodo/>
                <View>
                    <VisibleList/>
                </View>
                <Text>{}</Text>
            </View>
        );
    }
}

export default TodoApp;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40
    },
  });