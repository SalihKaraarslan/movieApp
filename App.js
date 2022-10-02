import React from 'react';
import Navigation from './src/navigation/Navigation';
import store from './src/redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
