import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './HomePage.module.css'
import RecipeList from '../../components/RecipeList/RecipeList';
import cookie from '../media/cookie.png'
import bgbg from '../media/bgbg.jpg'


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
                        <li>Автор</li>
                        <li>Тест1</li>
                        <li>Список Рецептов</li>
                        <li>Тест2</li>
                        <li>Тест3</li>
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