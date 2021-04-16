import React from 'react';
import style from './Home9.module.css'
import image1 from '../../../assets/images/l-news-1.jpg'
import image2 from '../../../assets/images/l-news-2.jpg'
import image3 from '../../../assets/images/l-news-3.jpg'

function Home9() {
    const cards = [
        {
            date: '14 AUG',
            image: image1,
            header:'Путь к успеху всегда в разработке',
            paragraph:'Ибо никто не отвергает, не любит и не избегает удовольствия как такового, потому что это удовольствие, но потому, что они не знают, как рационально стремиться к удовольствию, сталкиваются с последствиями, которые являются печалью тех, кто имеет.'
        },
        {
            date: '17 AUG',
            image: image2,
            header:'Путь к успеху всегда в разработке',
            paragraph:'Ибо никто не отвергает, не любит и не избегает удовольствия как такового, потому что это удовольствие, но потому, что они не знают, как рационально стремиться к удовольствию, сталкиваются с последствиями, которые являются печалью тех, кто имеет.'
        },
        {
            date: '23 AUG',
            image: image3,
            header:'Путь к успеху всегда в разработке',
            paragraph:'Ибо никто не отвергает, не любит и не избегает удовольствия как такового, потому что это удовольствие, но потому, что они не знают, как рационально стремиться к удовольствию, сталкиваются с последствиями, которые являются печалью тех, кто имеет.'
        },
    ]
    return (
        <div className={style.main}>
            <h1>ПОСЛЕДНИЙ
 <br /> НОВОСТИ</h1>
            <h3>Строительный мир</h3>
            <div className={style.container}>
                {
                    cards.map((card, index) => {
                        return(
                            <div className={style.card} key={index}>
                                <div className={style.image} style={{backgroundImage: `url(${card.image})`}}>
                                </div>
                                    <h5>{card.date}</h5>
                                <div className={style.info}>
                                    <h1>{card.header}</h1>
                                    <h3>Автор: Admin</h3>
                                    <p>{card.paragraph}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home9
