import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsNightMode } from '../redux/reducers/themeSlice';
import { RootState } from '../redux/store';
import DarkTheme from '../Components/theme/DarkTheme';

const NotFoundPage:React.FC = () => {



    return (
        <>
        <div className='centre'>
            <div className='centre__components NF__DARK'>
                <DarkTheme />
            </div>
        </div>
        <div className={'notFound'} >
            <h1 > 😼 Такой страницы не существует </h1>
            <Link to={'/'} className={'notFound__button'}>
                Вернуться
            </Link>
        </div >
        </>
    )
}

export default NotFoundPage;