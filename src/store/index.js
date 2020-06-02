import {createStore, applyMiddleware} from 'redux';
import routeReducer from '../reducers';
import {persistReducer} from 'redux-persist'
import {createLogger} from 'redux-logger'
import { AsyncStorage } from 'react-native';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todos']
}

const persistedReducer = persistReducer(persistConfig, routeReducer);
export default store = createStore(persistedReducer, applyMiddleware(createLogger()));
