import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from '../../hooks/useThrottle'
import { setSearchValue } from '../../redux/reducers/searchSlice'
import styles from './Search.module.scss'



const Search = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef();

    const dispatch = useDispatch();

    const debounce = useDebounce(() => {
        dispatch(setSearchValue(value))
    }, 300);

    const onClickClear = () => {
        dispatch(setSearchValue(''))
        setValue('')
        inputRef.current.focus();
    }

    useEffect(() => {
        debounce(value)
    }, [value])

    return (
        <div className={styles.searchContainer}>

            <svg className={styles.icon}
                enableBackground="new 0 0 32 32"
                id="Glyph" version="1.1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  
                s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  
                C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                    id="XMLID_223_" />
            </svg>

            <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} className={styles.search} placeholder='Поиск' />
            {value &&
                <svg onClick={() => onClickClear()} className={styles.deleteValue} version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><g id="info" /><g id="icons"><path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" id="exit" /></g></svg>
            }
        </div >
    )
}

export default Search

