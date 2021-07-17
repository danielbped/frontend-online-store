import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Cart from './pages/Cart';
import Main from './pages/Main';
import Payment from './pages/Payment';
import './App.css';
import ItemDetails from './pages/ItemDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      valueInput: '',
      quantity: parseInt(localStorage.getItem('count'), 10) + 1 || 0,
    };
    this.callback = this.callback.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  getValue(value) {
    this.setState({
      valueInput: value,
    });
    return value;
  }

  callback() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
    localStorage.setItem('count', quantity);
  }

  render() {
    const { valueInput, quantity } = this.state;
    return (
      <BrowserRouter>
        <SearchBar
          getValue={ this.getValue }
          quantity={ quantity }
        />
        <Route
          exact
          path="/"
          render={ () => <Main value={ valueInput } callback={ this.callback } /> }
        />
        <Route
          path="/details/:id"
          render={ (props) => <ItemDetails { ...props } callback={ this.callback } /> }
        />
        <Route exact path="/Cart" render={ () => <Cart callback={ this.callback } /> } />
        <Route exact path="/Payment" component={ Payment } />
      </BrowserRouter>
    );
  }
}

export default App;
