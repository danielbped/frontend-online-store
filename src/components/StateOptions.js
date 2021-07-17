import React, { Component } from 'react';

class Options extends Component {
  render() {
    const estados = [
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO'];

    return (
      estados.map((estado) => <option key={ estado }>{estado}</option>)
    );
  }
}

export default Options;
