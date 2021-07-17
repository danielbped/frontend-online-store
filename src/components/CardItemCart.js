import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardItem.css';

class CardItemCart extends React.Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      itemId,
      onClick,
      quantity,
      amount,
    } = this.props;
    return (
      <div className="card-item">
        <Link to={ `/details/${itemId}` } data-testid="product-detail-link">
          <p data-testid="shopping-cart-product-name">
            { title }
          </p>
          <img alt="" src={ thumbnail } />
        </Link>
        <div className="increase-div">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            name="-"
            onClick={ (event) => onClick(itemId, event) }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">
            { `Quantidade: ${amount}` }
          </p>
          <button
            data-testid="product-increase-quantity"
            type="button"
            name="+"
            disabled={ amount === quantity }
            onClick={ (event) => onClick(itemId, event) }
          >
            +
          </button>
        </div>
        <p>
          R$
          { price }
        </p>
      </div>
    );
  }
}

CardItemCart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardItemCart;
