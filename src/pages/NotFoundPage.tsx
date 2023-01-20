import React from 'react'

import { Link } from 'react-router-dom';

import { DarkTheme } from '../Components';

const NotFoundPage: React.FC = () => {



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