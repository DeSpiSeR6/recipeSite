import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './HomePage.module.css'
import RecipeList from '../../components/RecipeList/RecipeList';
import cookie from '../media/cookie.png'
import bgbg from '../media/bgbg.jpg'
import about from '../AboutMe/AboutMe'


const HomePage = () => {
    const [recipeList, setRecipeList] = useState([])

    const fetchRecipe = () => {
        axios('https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json')
            .then(function (response) {
                setRecipeList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(fetchRecipe, [])

    return (
        <section className={styles.shopPage}>
            <div className={styles.left}>
                <div className={styles.imgimg}>
                    <img src="../media/Fire1.png" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.imgimg}>
                    <img src="../media/Fire1.png" alt="" />
                </div>
            </div>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <ul>
                        <li>  <Link to="/About" target="_blank" className={styles.links}>Автор</Link> </li>
                        <li><Link to="//www.youtube.com/" target="_blank" className={styles.links}>Ссылка на ютуб</Link></li>
                        <span className={styles.spann}> <li>Список Рецептов</li> </span>
                        <li><Link to="//yandex.ru/" target="_blank" className={styles.links}>Ссылка на яндекс</Link></li>
                        <li><Link to="/" className={styles.links}>Обновить</Link></li>
                    </ul>
                </div>

            </div>

            <div className={styles.siteBody}>
                <RecipeList recipeList={recipeList} styles={styles} />
            </div>
        </section >
    )
}
export default HomePage;
// <img src={cookie} alt="Печенька" className={styles.cookie} />
// <img src={bgbg} alt="" className={styles.bgbg} />
/*переделать navbar, footer; стили: карточки, модалки*/