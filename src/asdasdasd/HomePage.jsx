import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Card, Button, Badge } from 'react-bootstrap';

import styles from './HomePage.module.css'
import cookies from '../media/614131.png'

const HomePage = () => {
    const [recipeList, setRecipeList] = useState([])

    const fetchRecipe = () => {
        axios('https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json')
            .then(function (response) {
                setRecipeList(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(fetchRecipe, [])

    return (

        <section className={styles.shopPage}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <h1>Список рецептов</h1>
                    <img src={cookies} alt="Печенька" className={styles.cookie} />
                </div>
            </div>
            <div className={styles.shopContainer}>
                <div className={styles.siteBody}>

                    {recipeList.map((recipe) => {
                        return <Card key={recipe.id} style={{ width: '18rem' }} className={styles.CardItem}>

                            <Card.Img variant="top" className={styles.CardItemImg} src={recipe.imageURL} />
                            <Card.Body className={styles.CardBody}>
                                <Card.Title> Название: {recipe.name}  </Card.Title>


                                <Button variant="primary" className={styles.butt} href='#'  >  Открыть рецепт  <Badge bg="success"   ><Link to="/ri1">НОВЫЙ</Link></Badge></Button>

                            </Card.Body>
                        </Card>;
                    })}
                </div>
                <h2>О Сайте</h2>
                <h5 id="down">Это мой первый сайт, на данном сайте размещено 9 рецептов</h5>

            </div>
        </section >
    )
}
export default HomePage;