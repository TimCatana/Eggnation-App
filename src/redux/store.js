import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore, persistReducer } from 'redux-persist'
import {userReducer, gameReducer} from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['gameReducer']
}

const rootReducer = combineReducers({
  userReducer, 
  gameReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor}
