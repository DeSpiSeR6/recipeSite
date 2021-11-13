import React from 'react'
import styles from './page.module.css'
import cookies from '../media/614131.png'
import r6 from '../media/r6.jpg'
export const ri6 = () => {
    return (
        <div className={styles.backGround}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <h1>Рецепт Йоркшширские пуды</h1>
                    <img src={cookies} alt="Печенька" className={styles.cookie} />
                </div>
            </div>
            <div className={styles.inside}>
                <img src={r6} alt="Жаркое в горошчке" />
                <h3 className={styles.recept}> название: Йоркширские пуды Mic's, <br />
                    ингредиенты: <br />
                    <span> количество:</span> 200 г, <br />
                    <span>название:</span> обычная мука, <br />
                    <span>тип:</span> Выпечка <br />

                    <span>количество:</span> 3, <br />
                    <span>название:</span> яйца, <br />
                    <span>тип:</span> Молочные продукты <br />

                    <span>количество:</span> 300 мл, <br />
                    <span>название:</span> молоко, <br />
                    <span>тип:</span> Молочные продукты <br />

                    <span>количество:</span> 3 столовые ложки, <br />
                    <span>название:</span> растительное масло, <br />
                    <span>тип:</span> Приправы <br />
                    <span>шаги:</span> <br />
                    <span>Положить муку и приправы в миске</span> <br />
                    <span>Добавьте яйца, по одному за раз</span> <br />
                    <span>Венчик в молоко до однородной консистенции</span> <br />
                    <span>Охладите в холодильнике не менее 30 минут</span> <br />
                    <span>Разогрейте духовку до 220C/газ-7</span> <br />
                    <span>Подливают масло в отверстия 8-отверстие формы для кексов</span> <br />
                    <span>Тепло олова в духовку на 5 минут</span> <br />
                    <span>Половником тесто смесь в форму</span> <br />
                    <span>Выпекайте в течение 30 минут, пока хорошо не подрумянится и не поднимется"</span> <br />
                </h3>
            </div >
        </div>
    )
}
export default ri6;