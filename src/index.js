import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase, { FirebaseContext } from './Components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

