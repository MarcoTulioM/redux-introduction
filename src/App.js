import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from './components/sidebar';
import Video from './components/videos';

import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
