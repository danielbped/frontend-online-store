import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FreeShipping from './FreeShipping';
import productsCart from '../services/data';
import './CardItem.css';

class CardItem extends Component {
  addToData = (item) => {
    const { callback } = this.props;
    const i = productsCart.findIndex(({ id }) => id === item.id);
    if (i < 0) {
      callback();
      return productsCart.push(item);
    }
    productsCart[i].quantidade += 1;
    callback();
  }

  render() {
    const {
      title,
      thumbnail,
      price,
      itemId,
      shipping,
      item,
    } = this.props;
    item.quantidade = 1;
    return (
      <div data-testid="product" className="card-item">
        <Link to={ `/details/${itemId}` } data-testid="product-detail-link">
          <p>
            { title }
          </p>
          <img alt="" src={ thumbnail } />
          <p>
            R$
            { price }
          </p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addToData(item) }
        >
          Adicionar ao carrinho
        </button>
        { shipping && <FreeShipping /> }
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantidade: PropTypes.number,
  }).isRequired,
  shipping: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default CardItem;
