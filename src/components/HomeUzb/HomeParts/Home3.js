import React from 'react'
import style from './Home3.module.css'
import img from '../../../assets/images/who-we.jpg'

function Home3() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className = {style.first}>
                    <h1>БИЗ КИММИЗ?</h1>
                    <h3>БИЗ ҲАҚИМИЗДА</h3>
                    <p>Irure Lorem eu eiusmod amet ullamco reprehenderit laboris sint duis mollit deserunt. Ullamco nisi deserunt nisi minim fugiat ut consequat laborum nulla deserunt adipisicing mollit esse. Elit dolore tempor cupidatat cupidatat incididunt adipisicing nostrud est laboris magna. Elit dolor veniam ex deserunt veniam reprehenderit officia duis eu pariatur labore officia laborum. Cillum mollit officia eiusmod cillum labore minim tempor dolor et in et consectetur ipsum reprehenderit. Ex labore sunt ad velit ad consectetur do laboris deserunt. Commodo minim labore cupidatat aliqua ipsum ipsum Lorem.</p>

                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                </div>
                <div className = {style.second} style={{backgroundImage: `url(${img})`}}></div>
            </div>
        </div>
    )
}

export default Home3
