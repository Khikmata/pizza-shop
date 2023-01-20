import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const PizzaPage: React.FC = () => {

    const [pizza, setPizza] = useState({ title: '', description: '', imageUrl: '', price: 0 });
    const [isItPizza, setIsItPizza] = useState(true)


    const { id } = useParams();

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await axios.get('https://63bb40aa32d17a50908b3902.mockapi.io/items/' + id);
                setPizza(response.data)
                setIsItPizza(true)
            } catch (e) {
                setIsItPizza(false)
            }
        }
        fetchPizza();
    }, [])


    return (
        <>

            {isItPizza
                ? < div className='pizza-page container'>
                    <div className="pizza-page-left">
                        <img src={pizza.imageUrl}></img>
                    </div>
                    <div className="pizza-page-right">
                        <h2 className='pizza-page__title'>{pizza.title}</h2>
                        <p>{pizza.description ? pizza.description : (isItPizza && 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, asperiores! Repellendus quidem velit voluptate harum porro sunt modi consequatur! Incidunt distinctio recusandae dolorem amet porro doloremque enim veritatis molestiae obcaecati?')}</p>
                        <div className="cart__bottom-buttons" >
                            <Link to={'/'} className="button button--outline go-back-btn" >
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Вернуться назад</span>
                            </Link >
                        </div >
                    </div>
                </div>
                :
                <div className='pizza-notexist pizza-page container'>
                    <h2 className='pizza-page__title'>Такой пиццы не существует 🐱</h2>
                    <div className="cart__bottom-buttons" >
                        <Link to={'/'} className="button button--outline go-back-btn notexist-btn" >
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Вернуться назад</span>
                        </Link >
                    </div>
                </div>
            }
        </>
    )
}

export default PizzaPage