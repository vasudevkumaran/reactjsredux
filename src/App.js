import React from 'react';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import studentActionReducer from './mystore/MyReducer';

const myStudentStore = createStore(studentActionReducer);

export default class App extends React.Component{

  render(){
    return <Provider store={myStudentStore}>
        <Main/>
    </Provider>
  }
}