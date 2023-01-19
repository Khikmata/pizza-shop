import React from 'react'

import { useEffect } from 'react';
import Categories from '../Components/Categories'
import Sort from '../Components/Sort'
import PizzaBlock from '../Components/PizzaBlock'
import { Skeleton } from '../Components/PizzaBlock/Skeleton'


import { useDispatch, useSelector } from 'react-redux';
import { setCategoryIndex, } from '../redux/reducers/filterSlice';
import { getPizzas } from '../redux/reducers/fetchItemSlice';



const Home:React.FC = () => {


    const dispatch = useDispatch();

    //Переменные для пиццы и статуса отправки( Loading || Fulfilled || Error)
    const { items, status } = useSelector((state: any) => state.fetchItemSlice)

    //Фильтры для поиска
    const searchValue = useSelector((state: any) => state.searchSlice.searchValue)
    const sortType = useSelector((state: any) => state.filterSlice.sort.sortValue);
    const sortOrder = useSelector((state: any) => state.filterSlice.sort.orderBy)
    const categoryIndex = useSelector((state: any) => state.filterSlice.categoryIndex);
    const categoryFilter = categoryIndex > 0 ? `category=${categoryIndex}` : ''


    //Для передачи компоненту категорий

    const onClickCategory = (index: number) => {
        dispatch(setCategoryIndex(index))
    }

    //Получение пицц с бекенда при рендере и обновлении компонентов
    useEffect(() => {
        const fetchPizzas = async () => {
            // @ts-ignore
            dispatch(getPizzas({ categoryFilter, sortType, sortOrder, searchValue }))
        }
        fetchPizzas();
    }, [categoryIndex, sortType, searchValue, sortOrder, categoryFilter]);

    //Верстка
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories activeIndex={categoryIndex} onClickCategory={onClickCategory} />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    {
                        //При ошибке => сообщение об ошибке
                        status === 'error'
                            ?
                            <div className='content__error'>
                                <h2>Произошла ошибка при загрузке пицц {':('} </h2>
                                <p>
                                    Попробуйте повторить попытку позже
                                </p>
                            </div>
                            :
                            //При фулфиллед запросе => контент
                            <div className="content__items">
                                {status === 'loading'
                                    ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                                    : items.map((item:any, index:number) => (<PizzaBlock key={index} {...item} />))
                                }
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Home