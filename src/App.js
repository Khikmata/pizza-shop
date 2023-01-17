
import Home from './pages/Home';

import './scss/app.scss';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';


function App() {



  return (
    <>


      <div className="wrapper">
        {/* Пагинация */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </div >

    </>
  )
}

export default App;
