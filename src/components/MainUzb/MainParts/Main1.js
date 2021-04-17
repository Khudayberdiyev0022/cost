import React, {useState} from 'react'
import style from './Main1.module.css'
import {AiOutlineCaretDown,AiOutlineCaretUp} from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

function Main1() {
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.one}>
                    <div className={style.oneClick} onClick={() => setOne(!one)} style={{cursor:'pointer'}}>
                        <h1 >Хизматлар</h1>
                        {one ? <AiOutlineCaretUp onClick={() => setOne(!one)}/>: <AiOutlineCaretDown onClick={() => setOne(!one)}/>}
                    </div>
                    {
                        one && 
                        <div className={style.oneContainer}>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/сантехника'>Сантехника
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/электроэнергия'>Электроэнергия
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/алока'>Алоқа
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/интернет'>Интернет
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/техника'>Маиший техника
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/тозалаш'>Тозалаш
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/юкташиш'>Юк ташиш
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/мебел'>Мебель таъмирлаш
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/богбончилик'>Боғбончилик
                            </NavLink>
                        </div>
                    }
                </div>
                <div className={style.two}>
                    <div className={style.twoClick} onClick={() => setTwo(!two)} style={{cursor:'pointer'}}>
                        <h1 >Транспорт ва махсус техника</h1>
                        {two ? <AiOutlineCaretUp onClick={() => setTwo(!two)}/>: <AiOutlineCaretDown onClick={() => setTwo(!two)}/>}
                    </div>
                    {
                        two && 
                        <div className={style.twoContainer}>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/кичикгабарит'>Кичик ҳажмдаги юк
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/каттагабарит'>Катта ҳажмдаги юк
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/автокран'>Кўчма кран	
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/экскаватор'>Экскаватор
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/эвакуатор'>Эвакуатор
                            </NavLink>
                        </div>
                    }
                </div>
                <div className={style.three}>
                    <div className={style.threeClick} onClick={() => setThree(!three)} style={{cursor:'pointer'}}>
                        <h1 >Бино ва иншоатлар</h1>
                        {three ? <AiOutlineCaretUp onClick={() => setThree(!three)}/>: <AiOutlineCaretDown onClick={() => setThree(!three)}/>}
                    </div>
                    {
                        three && 
                        <div className={style.threeContainer}>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/еркавлаш'>Ер кавлаш
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/гишттериш'>Ғишт қуйиш
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/енгилтамирлаш'>Косметика
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/сувок'>Сувоқчи
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/буекчи'>Бўёқчи
                            </NavLink>
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/шифт'>Шифт таъмирлаш
                            </NavLink>
                          
                            <NavLink 
                                activeStyle={{color: '#ffcd00'}} 
                                to='/томепиш'>Том ёпиш
                            </NavLink>
                        </div>
                    }
                </div>
                <Link to='booked/UZB' style={{fontSize:'18px',fontWeight:'100',paddingTop:'10px', cursor:'pointer',textDecoration:'uppercase'}}>Бошқа турдаги</Link>
            </div>
        </div>
    )
}

export default Main1