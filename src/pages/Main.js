import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardList from '../components/CardList';
import './Main.css';

class Main extends Component {
  render() {
    const { value, callback } = this.props;
    return (
      <div className="main">
        <CardList value={ value } callback={ callback } />
        <span className="main-message" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

Main.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Main;
