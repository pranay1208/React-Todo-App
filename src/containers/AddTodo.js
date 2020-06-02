import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component{
    state = {
        text: '',
    }

    add(text){
        if(text == '')
            return;
        this.props.dispatch(addTodo(text));
        this.setState({text:''});
    }

    render(){
        return (
            <View style={{flexDirection: "row", marginHorizontal: 20}}>
                <TextInput 
                    onChangeText = {(text)=>this.setState({text: text})}
                    value = {this.state.text}
                    placeholder="Create new reminders" 
                    style={{flex:1, height: 50, borderColor: '#00ff99',
                    borderWidth:2.5, paddingHorizontal: 15}}
                />
                <TouchableOpacity onPress={()=>this.add(this.state.text)}>
                    <View style={{height:50, borderWidth:2, borderColor: '#00ff99',alignItems:"center", justifyContent: "center", backgroundColor: '#0f9'}}>
                        <Ionicons name="md-add" size={30} style={{padding:10, color: '#000'}}/>
                    </View>
                </TouchableOpacity>
            </View> 
        );
    }
}

export default connect()(AddTodo);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });