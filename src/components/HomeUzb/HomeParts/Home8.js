import React from 'react';
import style from './Home8.module.css'
import {AiTwotoneProfile } from 'react-icons/ai'
import {GiFamilyHouse } from 'react-icons/gi'
import {BsPeopleFill } from 'react-icons/bs'
import {FaRegSmile } from 'react-icons/fa'
function Home8() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.cards}>
                    <div className={style.card}>
                        <AiTwotoneProfile />
                        <h1>245</h1>
                        <h3>УМУМИЙ ЛОЙИХАЛАР</h3>
                    </div>
                    <div className={style.card}>
                        <GiFamilyHouse />
                        <h1>535</h1>
                        <h3>УЙЛАР ҚУРИЛДИ</h3>
                    </div>
                    <div className={style.card}>
                        <BsPeopleFill />
                        <h1>288</h1>
                        <h3>ТЕХНИК ХОДИМЛАР</h3>
                    </div>
                    <div className={style.card}>
                        <FaRegSmile />
                        <h1>750</h1>
                        <h3>БАХТЛИ МИЖОЗЛАР</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home8
