import React from 'react'

import { useEffect } from 'react';

import { Categories, Sort, PizzaBlock, Skeleton } from '../Components'


import { setCategoryIndex, } from '../redux/reducers/filter/filterSlice';
import { getPizzas } from '../redux/reducers/fetchItems/fetchItemSlice';
import { useAppDispatch } from '../redux/store';
import { useTypedSelector } from '../hooks/useTypedSelector';




const Home: React.FC = () => {


    const dispatch = useAppDispatch();

    //Переменные для пиццы и статуса отправки( Loading || Fulfilled || Error)
    const { items, status } = useTypedSelector((state) => state.fetchItemSlice)

    //Фильтры для поиска
    const searchValue = useTypedSelector((state) => state.searchSlice.searchValue)

    const sortType = useTypedSelector((state) => state.filterSlice.sort.sortValue);
    const sortOrder = useTypedSelector((state) => state.filterSlice.sort.orderBy)
    const categoryIndex = useTypedSelector((state) => state.filterSlice.categoryIndex);
    const categoryFilter = categoryIndex > 0 ? `category=${categoryIndex}` : ''


    //Для передачи компоненту категорий

    const onClickCategory = (index: number) => {
        dispatch(setCategoryIndex(index))
    }

    //Получение пицц с бекенда при рендере и обновлении компонентов
    useEffect(() => {
        const fetchPizzas = async () => {
            dispatch(getPizzas({ categoryFilter, sortType, sortOrder, searchValue }))
        }
        fetchPizzas();

    }, [categoryIndex, sortType, searchValue, sortOrder, categoryFilter]);

    console.log(items)
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
                                    : items.map((item, index: number) => (<PizzaBlock key={index} {...item} />))
                                }
                            </div>
                    }
                    {
                        (items.length === 0 && status !== 'loading' &&
                            <div>
                                <h2 className={'items_notFound'}>
                                    К сожалению, по таким настройкам ничего не найдено
                                </h2>
                            </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Home