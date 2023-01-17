import React from 'react'
import emptyCartImg from '../img/empty-cart.png'


const CartEmpty = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Ваша корзина пуста :( </h2>
            <p>
              Похоже, вы еще ничего не добавили в нее
            </p>
            <img src={emptyCartImg} alt="Empty cart" />
            <a href="/" className="button button--black">
              <span>Вернуться назад</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartEmpty;

