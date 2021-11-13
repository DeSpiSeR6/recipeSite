import React from 'react'
import styles from './page.module.css'
import cookies from '../media/614131.png'
import r2 from '../media/r2.jpg'
export const ri2 = () => {
    return (
        <div className={styles.backGround}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <h1>Рецепт жаренной спажи</h1>
                    <img src={cookies} alt="Печенька" className={styles.cookie} />
                </div>
            </div>
            <div className={styles.inside}>
                <img src={r2} alt="Жаркое в горошчке" />
                <h3 className={styles.recept}> название: Жареная спаржа, <br />
                    ингредиенты: <br />
                    <span> количество:</span> 1 фунт, <br />
                    <span>название:</span> спаржа, <br />
                    <span>тип:</span> Продукция <br />

                    <span>количество:</span> 11/2 столовой ложки, <br />
                    <span>название:</span> оливковое масло, <br />
                    <span>тип:</span> Приправы <br />

                    <span>количество:</span> 1/2 чайной ложки, <br />
                    <span>название:</span> кошерная соль, <br />
                    <span>тип:</span> Выпечка <br />
                    <span>Разогреть духовку до 425 °F.",</span> <br />
                    <span>Отрежьте древесную нижнюю часть копий спаржи и выбросьте </span> <br />
                    <span>С помощью овощечистки очистите кожу на нижних 2-3 дюймах копий (это удерживает спаржу от всего.", строка.", и если вы едите спаржу, вы знаете, что я имею в виду под этим)"</span> <br />
                    <span>Положите спаржу на противень, выстланный фольгой, и сбрызните оливковым маслом</span> <br />
                    <span>Посыпьте солью</span> <br />
                    <span>Руками раскатайте спаржу, пока она не будет равномерно покрыта маслом и солью"</span> <br />
                    <span>Жарить 10-15 минут, в зависимости от толщины стеблей и нежное, как вы их любите"</span> <br />
                    <span>Они должны быть нежными, когда проколол кончиком ножа"</span> <br />
                    <span>Наконечники копья будут вам очень Браун, но наблюдать за ними, чтобы предотвратить горение"</span> <br />
                    <span>Они Великие равнины, но иногда я подаю их с легкой заправкой, если нужно что-то кислые, чтобы сбалансировать нашу еду</span> <br />
                </h3 >
            </div >
        </div >
    )
}
export default ri2;