import React from 'react';
import style from './Home1.module.css';
import img1 from '../../../assets/images/slider-1.jpg';
import { Link } from 'react-router-dom';


function Home1() {
    return (
        <div className={style.main} style={{backgroundImage: `url(${img1})`}}>
            <div className={style.dark}></div>
            {/* <h3>Биз билан кам ғамхўрлик!</h3> */}
            <h1>Асосий</h1>
            <div className={style.button}>
                <div className={style.background}></div>
                <Link to='/booked'>Биз билан боғланиш</Link>
            </div>
        </div>
    )
}

export default Home1
