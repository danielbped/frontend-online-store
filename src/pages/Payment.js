import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardSVG from '../SVGs/CardSVG';
import BarSVG from '../SVGs/BarSVG';
import BackSVG from '../SVGs/BackSVG';
import Options from '../components/StateOptions';
import products from '../services/data';
import './Payment.css';

class Payment extends Component {
  constructor() {
    super();

    this.state = {
      items: products,
    };
  }

  render() {
    const { items } = this.state;
    return (
      <main>
        <div className="back-icon">
          <Link to="/">
            <BackSVG />
          </Link>
        </div>
        <div>
          <h2 className="payment-title">Revise seus produtos</h2>
          <div className="payment-cart">
            <ul className="payment-cart-items">
              { items.map((item) => (
                <li key={ item.id } className="payment-cart-item">
                  <p className="payment-cart-item-title">{ item.title }</p>
                  <Link to={ `/details/${item.id}` }>
                    <img
                      className="payment-cart-image"
                      src={ item.thumbnail }
                      alt={ item.title }
                    />
                  </Link>
                  <p>{ `R$${item.price}` }</p>
                  <p>{ `Quantidade:${items.length}` }</p>
                </li>))}
            </ul>
            <p
              className="payment-total"
            >
              {
                `Total: R$${items.reduce((acc, curr) => acc + curr.price, 0)}`
              }
            </p>
          </div>
        </div>
        <h2 className="payment-title">Informações do Comprador</h2>
        <form className="payment-form">
          <input
            className="payment-input"
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
          />
          <input
            className="payment-input"
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
          />
          <input
            className="payment-input"
            data-testid="checkout-email"
            type="email"
            placeholder="E-mail"
          />
          <input
            className="payment-input"
            data-testid="checkout-phone"
            type="tel"
            placeholder="Telefone"
          />
          <input
            className="payment-input"
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
          />
          <input
            className="payment-input address"
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
          />
          <input
            className="payment-input"
            type="text"
            placeholder="Complemento"
          />
          <input
            className="payment-input"
            type="number"
            placeholder="Número"
          />
          <input
            className="payment-input"
            type="text"
            placeholder="Cidade"
          />
          <select className="payment-select">
            <option name="Estado">Estado</option>
            <Options />
          </select>
        </form>
        <h2 className="payment-title">Método de Pagamento</h2>
        <div className="payment-radios">
          <div className="payment-card">
            <p>Boleto</p>
            <label htmlFor="radio-boleto">
              <input name="payment" type="radio" className="radio-boleto" />
              <BarSVG />
            </label>
          </div>
          <div className="payment-card">
            <p>Cartão de crédito</p>
            <label htmlFor="radio-visa">
              <input name="payment" type="radio" id="radio-visa" />
              Visa
              <CardSVG />
            </label>
            <label htmlFor="radio-mastercard">
              <input name="payment" type="radio" id="radio-mastercard" />
              MasterCard
              <CardSVG />
            </label>
            <label htmlFor="radio-elo">
              <input name="payment" type="radio" id="radio-elo" />
              Elo
              <CardSVG />
            </label>
          </div>
        </div>
        <button className="payment-button" type="submit">Comprar</button>
      </main>
    );
  }
}

export default Payment;
