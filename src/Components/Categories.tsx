import React, { useState } from 'react'







interface ICategories{
activeIndex: number;
onClickCategory: any;
}

const Categories: React.FC<ICategories> = ({ activeIndex, onClickCategory }) => {

    //Список всех категорий
    const categories =
        [
            'Все',
            'Мясные',
            'Вегетарианская',
            'Гриль',
            'Острые',
            'Закрытые'
        ];

    return (
        <div className="categories">
            <ul>
                {/* Рендер категорий из списка */}
                {categories.map((category, i) => (
                    <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
                        {category}
                    </li>
                ))
                }
            </ul>

        </div >
    )
}

export default Categories;