import React from 'react';
import style from './Home7.module.css'
import img1 from '../../../assets/images/team-1.jpg'
import img2 from '../../../assets/images/team-3.jpg'

function Home7() {
    const cards = [
        {
            image: img1,
            name: 'A.R. KHAN',
            job: 'МУХАНДИС',
            phone: '+998991234567',
            cost: '20$'
        },
        {
            image: img2,
            name: 'SHARMIN SHARKAR',
            job: 'МУХАНДИС',
            phone: '+998991234567',
            cost: '30$'
        },
        {
            image: img1,
            name: 'RSHIDUL ISLAM',
            job: 'МУХАНДИС',
            phone: '+998991234567',
            cost: '50$'
        },
    ]
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>БИЗНИНГ<br /> ЖАМОА</h1>
                <h3>Биз ажойиб ва маҳоратлимиз</h3>
                <div className={style.cards}>
                    {
                        cards.map((card, index) => {
                            return(
                                <div key={index} className={style.card} >
                                    <div className={style.image} style={{backgroundImage: `url(${card.image})`}}>
                                        <div className={style.dark}>
                                            
                                        </div>
                                        <h3>PHONE: {card.phone}</h3>
                                        <h3>COST: {card.cost}</h3>
                                    </div>
                                    <div className={style.info}>
                                        <h1>{card.name}</h1>
                                        <h2>{card.job}</h2>
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

export default Home7
