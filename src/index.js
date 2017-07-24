import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (!localStorage.getItem('todos')) {
  let todos = '[]';
  localStorage.setItem('todos', todos);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
