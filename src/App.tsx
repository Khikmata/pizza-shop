
import Home from './pages/Home';

import './scss/app.scss';
import { Outlet, Route, Routes } from 'react-router-dom';

import Main from './layouts/Main';
import React from 'react';

const CartPage = React.lazy(() => import(/* webpackChunkName: "CartPage" */'./pages/CartPage'))
const PizzaPage = React.lazy(() => import(/* webpackChunkName: "PizzaPage" */'./pages/PizzaPage'))
const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "NotFoundPage" */'./pages/NotFoundPage'))



function App() {

  return (
    //Все страницы
    <div className="wrapper">
      <React.Suspense fallback={<div className="loading-screen"><div className="loading-icon" /></div>}>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route path='' element={<Home />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='pizza/:id' element={<PizzaPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </React.Suspense>
    </div >
  )
}

export default App;
