import React from 'react'
import style from './Home3.module.css'
// import img from '../../../assets/images/who-we.jpg'

function Home3() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className = {style.first}>
                    <h1>КТО МЫ?</h1>
                    <h3>Все о нас</h3>
                    <p>Общество с ограниченной ответственностью “CELEBRO PRO” образовано в 2021 году, чья деятельность направлена на организацию единой электронной платформы – «Мир услуг» с целью создания условий населению для пользования услугами «частной» формы на территории страны. </p>

                    <p>
                    Если на первом этапе в «Мире услуг» организованы возможности поиска, найма и связи с представителями «частных» услуг, то со стороны нашей Компании ведутся работы касательно последующих этапов расширения. В частности, запланированы организация Персонального кабинета для пользователей, сборник заказов, расширение списка «частных» услуг. 
                    </p>
                    
                    <p>
                    Кроме всего прочего, ведется отдельная работа по организации индивидуального обслуживания потребителей исходя из «Спроса и потребностей», а именно конкретному потребителю организуется обслуживание отдельной группой специалистов. 
                    </p>
                    <p>
                    Также, в кратчайшее время будет организовано обслуживание пользователей «Мира услуг» в режиме 24/7.
                    </p>
                    <p>
                    На сегодняшний день основным преимуществом пользования «Миром услуг» является то, что образуется уникальная возможность заказывать множества видов бытовых услуг удаленно, в том числе прямо из дома. При этом, есть открытая возможность наблюдения за статусом исполнения заказов в режиме реального времени. 
                    </p>
                    <p>
                    Следует отметить, что на сегодняшний день пользоваться «частными» видами услуг в большинстве случаев возможно только при наличном взаиморасчете. В эпоху безналичных доходов (например, заработную плату), если расходы наличкой отчасти создают определенного рода неудобства, то мы решили подобную проблему. Расчеты возможны как в наличной форме, так в безналичной форме через банковские пластиковые карточки. 
                    </p>
                    <p>
                    Хочется упомянуть о еще одном удобстве платформы: Вы избавитесь от поиска работников на «рынке» заказывая нужные услуги прямо из дома, хлопоты поиска мы берем на себя!!!
                    </p>
                    <p>
                    В целом – <strong> С НАМИ УДОБНЕЙ!!!</strong>
                    </p>
                </div>
                {/* <div className = {style.second} style={{backgroundImage: `url(${img})`}}></div> */}
            </div>
        </div>
    )
}

export default Home3
