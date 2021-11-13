import React from 'react'
import styles from './page.module.css'
import cookies from '../media/614131.png'
import r4 from '../media/r4.jpg'
export const ri4 = () => {
    return (
        <div className={styles.backGround}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <h1>Рецепт Большой ночной пиццы</h1>
                    <img src={cookies} alt="Печенька" className={styles.cookie} />
                </div>
            </div>
            <div className={styles.inside}>
                <img src={r4} alt="Жаркое в горошчке" />
                <h3 className={styles.recept}> название: Большая ночная пицца, <br />
                    ингредиенты: <br />
                    <span> количество:</span> 5 чайных ложек, <br />
                    <span>название:</span> дрожжи, <br />
                    <span>тип:</span> Выпечка <br />

                    <span>количество:</span> 5 чашек, <br />
                    <span>название:</span> мука, <br />
                    <span>тип:</span> Выпечка <br />

                    <span>количество:</span> 4 столовые ложки, <br />
                    <span>название:</span> растительное масло, <br />
                    <span>тип:</span> Выпечка <br />

                    <span>количество:</span> 2 столовые ложки, <br />
                    <span>название:</span> сахар, <br />
                    <span>тип:</span> Выпечка <br />

                    <span>количество:</span> 2 чайные ложки, <br />
                    <span>название:</span> соль, <br />
                    <span>тип:</span> Выпечка <br />

                    <span>количество:</span> 2 чашки, <br />
                    <span>название:</span> горячая вода, <br />
                    <span>тип:</span> Разное <br />

                    <span>количество:</span> 1/4 стакана, <br />
                    <span>название:</span> соус для пиццы, <br />
                    <span>тип:</span> Разное <br />

                    <span>количество:</span> 3/4 стакана, <br />
                    <span>название:</span> сыр моцарелла, <br />
                    <span>тип:</span> Молочный <br />
                    <span>шаги:</span> <br />
                    <span>Добавить горячей воды, чтобы дрожжи в миску и дайте постоять 15 минут.</span> <br />
                    <span>Смешайте масло, сахар, соль и муку и оставьте на 1 час.</span> <br />
                    <span>Замесить тесто и выкладывать на сковороду.</span> <br />
                    <span>Распространение пиццу соусом и посыпать сыром.</span> <br />
                    <span>Любые дополнительные начинки, как вы хотите</span> <br />
                    <span>Запекается при температуре 400 градусов по Фаренгейту в течение 15 минут.</span> <br />
                    <span>Наслаждайтесь!</span> <br />
                </h3>
            </div >
        </div>
    )
}
export default ri4;