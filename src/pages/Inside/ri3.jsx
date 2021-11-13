import React from 'react'
import styles from './page.module.css'
import cookies from '../media/614131.png'
import r3 from '../media/r3.jpg'
export const ri3 = () => {
    return (
        <div className={styles.backGround}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <h1>Рецепт чечевицы с карри</h1>
                    <img src={cookies} alt="Печенька" className={styles.cookie} />
                </div>
            </div>
            <div className={styles.inside}>
                <img src={r3} alt="Жаркое в горошчке" />
                <h3 className={styles.recept}> название: Чечевица с Карри и рис, <br />
                    ингредиенты: <br />
                    <span> количество:</span> 1 кварта, <br />
                    <span>название:</span> Говяжий бульон, <br />
                    <span>тип:</span> Разное <br />

                    <span>количество:</span> 1 чашка, <br />
                    <span>название:</span> Сушеная зеленая чечевица, <br />
                    <span>тип:</span> Разное <br />

                    <span>количество:</span> 1/2 чашки басмати, <br />
                    <span>название:</span> рис басмати, <br />
                    <span>тип:</span> Разное <br />

                    <span>количество:</span> 1 чайная ложка, <br />
                    <span>название:</span> Порошок карри, <br />
                    <span>тип:</span> Приправы <br />

                    <span>количество:</span> 1 чайная ложка, <br />
                    <span>название:</span> соль, <br />
                    <span>тип:</span> Приправы <br />
                    <span>шаги:</span> <br />
                    <span>Довести бульон до слабого кипения.</span> <br />
                    <span>Добавить порошок карри и соль.</span> <br />
                    <span>Варить чечевицу в течение 20 минут.</span> <br />
                    <span>Добавить рис и варить на медленном огне в течение 20 минут.</span> <br />
                    <span>Наслаждайтесь!"</span> <br />
                </h3>
            </div >
        </div>
    )
}
export default ri3;