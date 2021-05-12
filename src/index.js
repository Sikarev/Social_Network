import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { Provider } from './StoreContext';
// import {addPost, updateNewPostText} from './redux/state';

let renderEntireTree = (store) => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App store={store}/>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

renderEntireTree(store);

store.subscribe( () => {
    renderEntireTree(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
