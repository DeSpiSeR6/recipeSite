import React, { useState } from 'react'
import RecipeItem from '../RecipeItem/RecipeItem';
import RecipeModal from '../../components/RecipeModal/RecipeModal';


const RecipeList = ({ recipeList, styles }) => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [currentRecipe, setCurrentRecipe] = useState({})

  const clickHandler = (recipe) => {
    setCurrentRecipe(recipe)
    setIsModalOpened(true)
  }


  return (
    <>
      {
        isModalOpened === true
          ?
          <RecipeModal show={isModalOpened} recipe={currentRecipe} onHide={() => { setIsModalOpened(false) }} />
          :
          recipeList.map((recipe) => {
            return (
              <RecipeItem key={recipe.name} recipe={recipe} styles={styles} onClickHandler={() => clickHandler(recipe)} />
            );
          })
      }
    </>
  )
}

export default RecipeList
