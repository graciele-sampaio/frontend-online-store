import React from 'react';
import { getProductId } from '../services/api';

export default class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  // componentDidMount = () => {
  //   const storage = JSON.parse(localStorage.getItem('cart'));
  //     this.setState((prevState) ={
  //       cart: [...prevState.cart, id],
  //   })
  // }

  componentDidMount = () => {
    const storage = JSON.parse(localStorage.getItem('cart'));
    this.setState({ cart: storage });
  }

  render() {
    console.log(this.state.cart);
    const { cart } = this.state;
    return (
      cart.length > 0 ? (
        cart.map((item) => (
          <div key={ item.nome }>
            <p>{item.nome}</p>
            <p>{item.preco}</p>
          </div>
        ))
      ) : (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      )
    );
  }
}

// cartItems.length === 0
//             ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
//             : cartItems.map(({ id, price, title, qnt }) => (
//               <div
//                 key={ id }
//               >
//                 <p>
//                   {`R$ ${price}`}
//                 </p>
//                 <p data-testid="shopping-cart-product-name">
//                   {title}
//                 </p>
//                 <p data-testid="shopping-cart-product-quantity">
//                   {qnt}
//                 </p>
//               </div>
