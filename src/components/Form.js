import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
    };

    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    return (
      <form className="form">
        <label htmlFor="form-input-email">
          <input
            type="text"
            className="form-input-email"
            id="form-input-email"
            placeholder="E-mail"
            required
          />
          <StarRatingComponent
            className="form-rating-stars"
            name="rate1"
            starCount={ 5 }
            value={ rating }
            onStarClick={ this.onStarClick }
          />
        </label>
        <label htmlFor="form-input-message">
          <textarea
            data-testid="product-detail-evaluation"
            id="form-input-message"
            className="form-input-message"
            placeholder="Mensagem(opcional)"
          />
        </label>
      </form>
    );
  }
}

export default Form;
