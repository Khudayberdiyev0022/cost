import React from 'react'
import style from './Home3.module.css'
import img from '../../../assets/images/who-we.jpg'

function Home3() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className = {style.first}>
                    <h1>КТО МЫ?</h1>
                    <h3>Все о нас</h3>
                    <p>Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, полного описания системы и изложения фактических учений великого исследователя истины, которые развернутся в мастере-строителе мира. человеческое счастье. Ибо никто не отвергает, не любит и не избегает удовольствия как такового, потому что это удовольствие, но потому, что они не знают, как рационально стремиться к удовольствию, сталкиваются с последствиями, которые являются печалью тех, кто имеет.</p>

                    <p>Не существует ни одного человека, принадлежащего только к их мучительной муке, которую он желает получить dolor sit amet, conctetur, но к труду и боли, потому что у них нет чего-то великого, никогда не может быть привязан к поиску удовольствия, как манера поведения. времен падения. Загрузите информацию в виде vCard E, которая из нас когда-либо предпринимала тяжелые физические упражнения, кроме как для получения от этого некоторой выгоды?</p>
                </div>
                <div className = {style.second} style={{backgroundImage: `url(${img})`}}></div>
            </div>
        </div>
    )
}

export default Home3