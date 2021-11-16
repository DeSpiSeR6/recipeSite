import React, { useState } from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RecipeModal from '../RecipeModal/RecipeModal';
import styles from '../../pages/HomePage/HomePage.module.css'

const RecipeItem = ({ recipe, styles, onClickHandler }) => {
  const handleNoImage = (e) => {
    e.target.src = "https://media.moddb.com/images/articles/1/73/72743/image_error_full.png"
  }
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (isModalOpen) {
    return (
      <RecipeModal />
    )
  } else {
    return (
      <Card key={recipe.id} style={{ width: '18rem' }} className={styles.CardItem}>
        <Card.Img variant="top" className={styles.CardItemImg} src={recipe.imageURL} onError={handleNoImage} />
        <Card.Body className={styles.CardBody}>
          <Card.Title>
            {recipe.name}
          </Card.Title>
          <Button variant="light" onClick={onClickHandler} className={styles.button} >
            <Badge bg="success">
              НОВЫЙ
            </Badge>
            Открыть рецепт
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default RecipeItem
