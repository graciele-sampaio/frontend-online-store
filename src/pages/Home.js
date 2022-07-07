import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: '',
    };
  }

  componentDidMount = async () => {
    const categories = await getCategories();
    this.setState((prevState) => ({ ...prevState, categories }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <aside>
          { categories.map(({ name, id }) => (
            <label htmlFor={ name + id } key={ name } data-testid="category">
              <input type="radio" value={ id } id={ name + id } name="selectedCategory" />
              { name }
            </label>
          ))}
        </aside>
      </div>
    );
  }
}
