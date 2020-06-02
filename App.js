import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/store/index';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist'

const persistedStore = persistStore(store);
class App extends Component {
  render(){
    return (
        <Provider store={store}>
          <PersistGate persistor={persistedStore} loading={null}>
            <TodoApp />
          </PersistGate>
        </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
