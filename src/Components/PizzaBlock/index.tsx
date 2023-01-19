import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IPizza } from '../../models/IPizza';
import { addToCart, ICartItem } from '../../redux/reducers/cartSlice';


interface IPizzaBlock {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}

export const PizzaBlock:FC<IPizzaBlock> = (props) => {

    //вытаскивание  пропсов
    const id = props.id;
    const title = props.title;
    const price = props.price;
    const imageUrl = props.imageUrl;


    //определяем тип теста
    const doughType = [
        'тонкое',
        'традиционное'
    ]
    //Определяем размер пиццы
    const pizzaSizes = [
        '26',
        '30',
        '40',
    ]


    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const cartItem = useSelector((state:any) =>
        state.cartSlice.items.find(
            (obj: ICartItem) =>
                obj.id === id &&
                obj.type === doughType[activeType] &&
                obj.size === pizzaSizes[activeSize]
        )
    );

    const count = cartItem ? cartItem.count : 0;
    const dispatch = useDispatch()



    const [addItem, setAddItem] = useState(0)



    const buyPizza = () => {
        const item: ICartItem = {
            id,
            title,
            price,
            imageUrl,
            type: doughType[activeType],
            size: pizzaSizes[activeSize],
            count,
        }

        dispatch(addToCart(item))
        setAddItem(addItem + 1)
    }



    return (
        <div className='pizza-block-wrapper'>
            <div className="pizza-block">
                <Link to={`/pizza/${id}`}>
                    <img
                        className="pizza-block__image"
                        src={imageUrl}
                        alt="Pizza"
                    />
                </Link>
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {
                            props.types.map((typeIndex) => (
                                <li key={typeIndex} onClick={() => setActiveType(typeIndex)} className={activeType === typeIndex ? 'active' : ''}>{doughType[typeIndex]}</li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            props.sizes.map((size, i) => (
                                <li key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : ''}>{size} см.</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <div onClick={buyPizza} className="button button--outline button--add">
                        {/* <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg> */}
                        <span >Добавить</span>
                        <i> {count} </i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock