import React from 'react';
import style from './Home4.module.css'
import img from '../../../assets/images/service-bg.jpg'

import icon1 from '../../../assets/images/s-icon-1.png';
import icon2 from '../../../assets/images/s-icon-2.png';
import icon3 from '../../../assets/images/s-icon-3.png';
import icon4 from '../../../assets/images/s-icon-4.png';
import icon5 from '../../../assets/images/s-icon-5.png';
import icon6 from '../../../assets/images/s-icon-6.png';

function Home4() {
    const cards = [
        {
            icon: icon1,
            text: 'ПОДГОТОВКА К СТРОИТЕЛЬСТВУ',
            paragraph:'Но я должен объяснить вам, как все эти ошибочные представления об удовольствии и восхвалении боли относятся к обвинительному'
        },
        {
            icon: icon2,
            text: 'НОВОЕ СТРОИТЕЛЬСТВО',
            paragraph:'Но я должен объяснить вам, как все эти ошибочные представления об удовольствии и восхвалении боли относятся к обвинительному'
        },
        {
            icon: icon3,
            text: 'РЕМОДЕЛЬ И ПЕРЕИЗВЕДЕНИЕ',
            paragraph:'Но я должен объяснить вам, как все эти ошибочные представления об удовольствии и восхвалении боли относятся к обвинительному'
        },
        {
            icon: icon4,
            text: 'МЕСТО РАСПОЛОЖЕНИЯ',
            paragraph:'Но я должен объяснить вам, как все эти ошибочные представления об удовольствии и восхвалении боли относятся к обвинительному'
        },
        {
            icon: icon5,
            text: 'ГРАЖДАНСКОЕ И АРХИТЕКТУРА',
            paragraph:'Но я должен объяснить вам, как все эти ошибочные представления об удовольствии и восхвалении боли относятся к обвинительному'
        },
        {
            icon: icon6,
            text: 'ИНЖИНИРИНГ',
            paragraph:'Но я должен объяснить вам, как все эти ошибочные представления об удовольствии и восхвалении боли относятся к обвинительному'
        },

    ]
    return (
        <div className={style.main}>
            <div className={style.first} style={{backgroundImage: `url(${img})`}}>
                <div className={style.container}>
                    {
                        cards.map((card, index) => {
                            return(
                                <div key={index} className={style.card}>
                                    <img src={card.icon} alt="imag"/>
                                    <h1>{card.text}</h1>
                                    <p>{card.paragraph}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={style.second}>
                <div className={style.container}>
                    <h1>НАШ СЕРВИС</h1>
                    <h3>Лучшая строительная компания</h3>
                    <p>Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, полного описания системы и изложения фактических учений великого исследователя истины, которые развернутся в мастере-строителе мира. человеческое счастье. Ибо никто не отвергает, не любит или избегает самого удовольствия, потому что это удовольствие, а потому, что они принадлежат к горестям тех, кто из-за большого удовольствия.</p>
                    <p>Не существует ни одного человека, принадлежащего только к их мучительной муке, которую он желает получить dolor sit amet, conctetur, но к труду и боли, потому что у них нет чего-то великого, никогда не может быть привязан к поиску удовольствия, как манера поведения. времен падения. Чтобы прийти к маленькому.</p>
                    <p>Ибо никто не отвергает, не любит или избегает самого удовольствия, потому что это удовольствие, а потому, что они принадлежат к горестям тех, кто из-за большого удовольствия.</p>
                    <div className={style.line}></div>
                </div>
            </div>
        </div>
    )
}

export default Home4
