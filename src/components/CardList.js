import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import Loading from './Loading';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SideBar from './SideBar';
import './CardList.css';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.getValue();
    }
  }

  getValue = () => {
    const { value } = this.props;
    getProductsFromCategoryAndQuery('', value)
      .then((data) => {
        this.setState({
          categories: data.results,
        });
      });
  }

  searchByCategorie = (id) => {
    this.setState({ loading: true });

    getProductsFromCategoryAndQuery(id)
      .then(({ results }) => {
        this.setState({
          categories: results,
          loading: false,
        });
      });
  }

  render() {
    const { categories, loading } = this.state;
    const { callback } = this.props;
    return (
      <>
        <SideBar searchByCategorie={ this.searchByCategorie } />
        <div
          className="card-list"
        >
          { loading && <Loading /> }
          { categories.map((item) => (<CardItem
            callback={ callback }
            item={ item }
            key={ item.id }
            itemId={ item.id }
            title={ item.title }
            thumbnail={ item.thumbnail }
            price={ item.price }
            shipping={ item.shipping.free_shipping }
          />)) }
        </div>
      </>
    );
  }
}

CardList.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default CardList;
