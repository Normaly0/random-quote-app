import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

import reducers from './reducers/reducers';
import { loadQuote } from './actions/actions';

import './index.css';
import Container from './container/container.js'

let store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(loadQuote());

class App extends React.Component {
  render(){
    return (
      <div>
        <Provider store = {store}>
          <Container />
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<App/> , document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals