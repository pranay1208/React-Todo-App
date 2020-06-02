import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const List = ({todos, toggleTodo, removeTodo})=>(
    <View style={styles.container}>
        <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 25, backgroundColor: '#0f9'
            }}>
            ToDo:
        </Text>
        {todos.map(todo =>{
            return (
                <TouchableOpacity key={todo.id} onPress={()=>toggleTodo(todo.id)} 
                    onLongPress={()=>removeTodo(todo.id)}>
                        <View style={{backgroundColor: !todo.completed?'rgba(0, 256, 160, 1)':'rgba(150, 150, 150, 0.9)', 
                            height: 45, paddingHorizontal: 20, 
                            paddingVertical: 10, borderWidth: 1, borderColor: '#000', borderBottomWidth: 0.5}}>
                        <Text style={
                            {fontSize:20, 
                            textDecorationLine: todo.completed===true?'line-through':'none',
                            color: todo.completed===false?'black':'white'}}>
                            {todo.text}
                        </Text>
                        </View>
                </TouchableOpacity>
            );
        })}
    </View>
)

export default List;
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    //   paddingHorizontal: 20,
    //   paddingVertical: 10,
      marginHorizontal:15,
      borderWidth:2,
      marginTop:25,
      borderColor: '#0c6',
    },
  });