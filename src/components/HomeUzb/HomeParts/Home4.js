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
            text: 'ҚУРИЛИШДАН ОЛДИН',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon2,
            text: 'ЯНГИ ҚУРИЛИШ',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon3,
            text: 'ЯНГИ ДИЗАЙН',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon4,
            text: 'МАНЗИЛ',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon5,
            text: 'ФУҚАРОЛИК ВА МЕЪМОРЧИЛИК',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
        },
        {
            icon: icon6,
            text: 'ТЕХНИКА',
            paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium'
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
                    <h1>БИЗНИНГ ХИЗМАТЛАР</h1>
                    <h3>Энг яхши қурилиш компанияси</h3>
                    <p>Voluptate magna mollit sint ea laboris dolor dolore eu incididunt. Enim sint magna adipisicing et eu nisi adipisicing voluptate velit nostrud adipisicing veniam veniam incididunt. Excepteur deserunt laboris veniam consequat qui sint consectetur ea eiusmod. Do voluptate ea aute tempor qui velit mollit magna amet quis..</p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam quis.</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                    <div className={style.line}></div>
                </div>
            </div>
        </div>
    )
}

export default Home4
