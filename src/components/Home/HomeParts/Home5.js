import React from 'react'
import style from './Home5.module.css'

import img1 from '../../../assets/images/project-1.jpg'
import img2 from '../../../assets/images/project-2.jpg'
import img3 from '../../../assets/images/project-3.jpg'
import img4 from '../../../assets/images/project-4.jpg'
import img5 from '../../../assets/images/project-5.jpg'
import img6 from '../../../assets/images/project-6.jpg'
import { Link } from 'react-router-dom'


function Home5() {
    const all = [
        {
            image: img1,
            title: 'Сантехника',
            url:'/booked/RUS/'
        },
        {
            image: img2,
            title: 'Электроэнергия',
            url:'/booked/RUS/'
        },
        {
            image: img3,
            title: 'Бытовая техника',
            url:'/booked/RUS/'
        },
        {
            image: img4,
            title: 'Мебель ремонт',
            url:'/booked/RUS/'
        },
        {
            image: img5,
            title: 'Садоводство',
            url:'/booked/RUS/'
        },
        {
            image: img6,
            title: 'Укладка кирпича',
            url:'/booked/RUS/'
        },
    ]
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.cards}>
                    {
                        all.map((card, index) => {
                            return(
                                <div key={index} className={style.card} style={{backgroundImage:`url(${card.image})`}}>
                                    <div className={style.info} >
                                        <Link to={card.url}>{card.title}</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home5
