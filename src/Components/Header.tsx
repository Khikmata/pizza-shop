
import { useLocation } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';


import Cart from './Cart';
import Logo from './Logo';


import Search from './search/Search';
import DarkTheme from './theme/DarkTheme';

const Header = () => {

    const { items } = useTypedSelector((state) => state.cartSlice)
    const location = useLocation();


    return (
        <div className="header">
            <div className="container">
                <div className='left'>
                    <Logo />
                </div>
                {location.pathname === '/' &&
                    <div className='centre'>
                        <div className='centre__components'>
                            <Search />
                            <DarkTheme />
                        </div>
                    </div>
                }
                <div className='right'>
                    {location.pathname !== ('/cart' && '/') && <DarkTheme />}
                    {location.pathname === '/' && <Cart />}
                    {location.pathname === '/*' && <DarkTheme />}
                </div>
            </div>
        </div >
    )
}

export default Header;