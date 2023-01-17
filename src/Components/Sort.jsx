import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSortType, toggleOrderBy, } from '../redux/reducers/filterSlice';


export const sortStates = [
    { name: 'популярности', sortValue: 'rating' },
    { name: 'цене', sortValue: 'price' },
    { name: 'алфавиту', sortValue: 'title' },
]


const Sort = () => {

    const dispatch = useDispatch();

    const sort = useSelector(state => state.filterSlice.sort);

    const [visible, setVisible] = useState(false);

    const sortRef = useRef()


    const toggleOrder = () => {
        dispatch(toggleOrderBy())
    }

    const toggleSortItems = (i) => {
        dispatch(setSortType(i))
        setVisible(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.composedPath().includes(sortRef.current)) {
                setVisible(false)
            }
        }
        document.body.addEventListener('click', handleClickOutside)

        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])
    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label  ">
                <b >Сортировка по:</b>

                <span onClick={() => setVisible(!visible)}>{sort.name}</span>
                <svg className={`sort-container__button ${sort.orderBy ? 'active' : ''}`} onClick={toggleOrder}
                    width="10"
                    height="10"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path className='sort__button'
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>

            </div>
            {visible &&
                <div className="sort__popup">
                    <ul>
                        {
                            sortStates.map((obj, i) => (
                                <li
                                    key={i}
                                    className={sort.name === obj.name ? 'active' : ''}
                                    onClick={() => toggleSortItems(obj)}
                                >
                                    {obj.name}
                                </li>
                            ))
                        }
                        {/* <li onClick={() => onClickSort('популярности')}>популярности</li>
                        <li onClick={() => setSortedBy('цене')}>цене</li>
                        <li onClick={() => setSortedBy('алфавиту')}>алфавиту</li> */}
                    </ul>
                </div>
            }

        </div >
    )
};

export default Sort;