
import Home from './pages/Home';

import './scss/app.scss';
import NotFoundPage from './pages/NotFoundPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import PizzaPage from './pages/PizzaPage';
import Main from './layouts/Main';


function App() {

  function Wrapper() {
    return (
      <div className="wrapper">
        <Outlet />
      </div >
    )
  }

  return (
    //Пагинация
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Main />} >
          <Route path='' element={<Home />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='pizza/:id' element={<PizzaPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div >
  )
}

export default App;
