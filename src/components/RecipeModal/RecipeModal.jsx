import { Modal, Button, Image } from 'react-bootstrap'
import React from 'react'
import styles from '../../pages/HomePage/HomePage.module.css'
const RecipeModal = (props) => {
  const handleNoImage = (e) => {
    e.target.src = "https://media.moddb.com/images/articles/1/73/72743/image_error_full.png"
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.recipe.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <Image src={props.recipe.imageURL} fluid rounded alt='Изображение не найдено' onError={handleNoImage} className={styles.modalImg} />
        <ol className={styles.modalRecipe}>
          {props.recipe.ingredients.map(ingredient => {
            return (<li>{ingredient.name} <br /> {ingredient.quantity} pieces <br /> Type - {ingredient.type}</li>);
          }
          )}
        </ol>
        <ol className={styles.modalRecipe}>
          {props.recipe.steps.map(step => {
            return (<li> {step}</li>);
          }
          )}
        </ol>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeModal