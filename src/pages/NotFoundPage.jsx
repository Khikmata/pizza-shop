import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import themeSlice, { setIsNightMode } from '../redux/reducers/themeSlice';

const NotFoundPage = () => {

    const dispatch = useDispatch();
    const isNightMode = useSelector(state => state.themeSlice.isNightMode)

    useEffect(() => {
        let theme = localStorage.getItem("theme")
        if (theme === "dark") {
            setIsNightMode(true);
            document.body.classList.add("dark-theme");
        } else {
            setIsNightMode(false);
            document.body.classList.remove("dark-theme");
        }
    }, []);

    const toggleNightMode = () => {
        dispatch(setIsNightMode());
        if (isNightMode) {
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark-theme");
        } else {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark-theme");
        }
    };


    console.log(isNightMode)
    return (
        <div className={!isNightMode ? 'notFound' : 'notFound dark dark-theme'} >
            <h1 > 😼 Такой страницы не существует </h1>
            <Link to={'/'} className={'notFound__button'}>
                Вернуться
            </Link>
        </div >
    )
}

export default NotFoundPage;