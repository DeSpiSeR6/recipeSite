import React from 'react'
import styles from './page.module.css'
import r1 from '../media/r1.jpg'
import cookies from '../media/614131.png'
export const ri1 = () => {
    return (

        <div className={styles.backGround}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <h1>Рецепт жаркого в горшочке</h1>
                    <img src={cookies} alt="Печенька" className={styles.cookie} />
                </div>
            </div>
            <div className={styles.inside}>
                <img src={r1} alt="Жаркое в горошчке" />
                <h3 className={styles.recept}> название: Жаркое в горшочке, <br />
                    ингредиенты: <br />
                    <span> количество:</span> 1, <br />
                    <span>название:</span> жареная говядина, <br />
                    <span>тип:</span> Мясо <br />

                    <span>количество:</span> 1 упаковка, <br />
                    <span>название:</span> смесь коричневой подливки, <br />
                    <span>тип:</span> Выпечка <br />

                    <span>количество:</span> 1 упаковка, <br />
                    <span>название:</span> смесь сушеных итальянских заправок для салата, <br />
                    <span>тип:</span> Приправы <br />

                    <span>количество:</span> 1 упаковка, <br />
                    <span>название:</span> сухая смесь для заправки на ранчо, <br />
                    <span>тип:</span> Приправы <br />

                    <span>количество:</span> 1/2 стакана, <br />
                    <span>название:</span> вода, <br />
                    <span>тип:</span> Напитки <br />
                    <span>шаги:</span> <br />
                    <span>Поместите жаркое из говядины в кастрюлю,</span> <br />
                    <span>Смешайте сухие смеси в миске и посыпьте жаркое,</span> <br />
                    <span>Налейте воду вокруг жаркого,</span> <br />
                    <span>Готовьте на медленном огне в течение 7-9 часов.</span> <br />
                </h3>
            </div >
        </div>
    )
}
export default ri1;