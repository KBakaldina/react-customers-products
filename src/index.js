import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Customers from './components/customers';
// import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {
  render() {
    return <Customers/>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
