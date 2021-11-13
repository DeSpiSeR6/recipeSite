import React from 'react'
import styles from './page.module.css'
import cookies from '../media/614131.png'
import r5 from '../media/r5.jpg'
export const ri5 = () => {
    return (
        <div className={styles.backGround}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <h1>Рецепт тыквы с начинкой из клюквы и яблок</h1>
                    <img src={cookies} alt="Печенька" className={styles.cookie} />
                </div>
            </div>
            <div className={styles.inside}>
                <img src={r5} alt="Жаркое в горошчке" />
                <h3 className={styles.recept}> название: Тыква с начинкой из клюквы и яблок, <br />
                    ингредиенты: <br />
                    <span> количество:</span> 2, <br />
                    <span>название:</span> тыква из желудя, <br />
                    <span>тип:</span> Продукция <br />

                    <span>количество:</span> 1, <br />
                    <span>название:</span> кипяток, <br />
                    <span>тип:</span> Напитки <br />

                    <span>количество:</span> 2, <br />
                    <span>название:</span> яблоки, нарезанные на кусочки толщиной 1,4 дюйма, <br />
                    <span>тип:</span> Продукция <br />

                    <span>количество:</span> "1/2 стакана, <br />
                    <span>название:</span> сушеная клюква, <br />
                    <span>тип:</span> Продукция <br />

                    <span>количество:</span> 1 чайная ложка, <br />
                    <span>название:</span> корица, <br />
                    <span>тип:</span> Выпечка <br />

                    <span>количество:</span> 2 столовые ложки, <br />
                    <span>название:</span> топленое масло, <br />
                    <span>тип:</span> "Молочное <br />
                    <span>шаги:</span> <br />
                    <span>Разрежьте тыкву пополам, удалите семена</span> <br />
                    <span>Поместите тыкву в форму для выпечки, срезанной стороной вниз</span> <br />
                    <span>Налейте 1/4 дюйма воды в блюдо</span> <br />
                    <span>Выпекайте в течение 30 минут при температуре 350 градусов по Фаренгейту</span> <br />
                    <span>В большой миске смешайте оставшиеся ингредиенты</span> <br />
                    <span>Выньте тыкву из духовки, залейте смесью</span> <br />
                    <span>Выпекайте еще 30-40 минут, пока тыква не станет мягкой</span> <br />
                    <span>Наслаждайтесь!"</span> <br />
                </h3>
            </div >
        </div>
    )
}
export default ri5;