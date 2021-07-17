import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import * as api from '../services/api';
import './SideBar.css';

class SideBar extends Component {
  constructor() {
    super();

    this.renderCategories = this.renderCategories.bind(this);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.renderCategories();
  }

  renderCategories() {
    api.getCategories()
      .then((response) => {
        this.setState({
          categories: response,
          loading: false,
        });
      });
  }

  render() {
    const { loading, categories } = this.state;
    const { searchByCategorie } = this.props;
    return (
      <aside className="categories">
        {loading && <Loading />}
        <ul className="categories-list">
          {
            categories.map((categoria) => (
              <button
                className="categories-item"
                data-testid="category"
                type="button"
                key={ categoria.id }
                onClick={ () => searchByCategorie(categoria.id) }
              >
                { categoria.name }
              </button>
            ))
          }
        </ul>
      </aside>
    );
  }
}

SideBar.propTypes = {
  searchByCategorie: PropTypes.func.isRequired,
};

export default SideBar;
