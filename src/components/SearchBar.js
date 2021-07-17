import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cartImage from '../assets/carro.svg';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.getValueInput = this
      .getValueInput.bind(this);
    this.state = {
      valor: '',
    };
  }

  getValueInput(e) {
    const { getValue } = this.props;
    const { valor } = this.state;
    if (e.target.name === 'input') {
      this.setState({
        valor: e.target.value,
      });
    }
    if (e.target.name === 'button') {
      getValue(valor);
    }
  }

  render() {
    const { quantity } = this.props;
    return (
      <div className="search-bar">
        <label className="search-bar-label" htmlFor="search-bar">
          Pesquisar
          <input
            className="search-bar-input"
            id="search-bar"
            name="input"
            type="text"
            onChange={ this.getValueInput }
            data-testid="query-input"
          />
          <button
            type="submit"
            name="button"
            onClick={ this.getValueInput }
            data-testid="query-button"
          >
            Search
          </button>
          <Link to="/Cart" data-testid="shopping-cart-button">
            <img src={ cartImage } alt="Carrinho de compra" className="cart-img" />
            <span data-testid="shopping-cart-size">{ quantity }</span>
          </Link>
        </label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getValue: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default SearchBar;
