import React from "react";
import style from "./Home6.module.css";
import img from "../../../assets/images/workBg.jpg";

function Home6() {
  return (
    <div className={style.main} style={{ backgroundImage: `url(${img})` }}>
      <div className={style.dark}></div>
      <h1>
        РАБОТА
        <br /> С НАМИ
      </h1>
      <h3>Давайте получим предложение</h3>
      <p>
      Но я должен объяснить вам, как все это ошибочное представление об удовольствии
        осуждения и восхваления боли было полным отчетом о системе, и излагать фактические учения
        правда, хозяин.
      </p>
      <div className={style.button}>
        <div className={style.background}></div>
        <h2>Получить расценки</h2>
      </div>
    </div>
  );
}

export default Home6;
