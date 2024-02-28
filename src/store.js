// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // You'll create this file in the next step

const store = createStore(rootReducer);

export default store;
