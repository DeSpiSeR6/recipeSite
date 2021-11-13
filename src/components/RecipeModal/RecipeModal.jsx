import { Modal, Button, Image } from 'react-bootstrap'
import React from 'react'


const RecipeModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.recipe.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.recipe.imageURL} fluid rounded alt='Изображение не найдено' />
        <ol>
          {props.recipe.ingredients.map(ingredient => {
            return (<li>{ingredient.name} <br /> {ingredient.quantity} pieces <br /> Type - {ingredient.type}</li>);
          }
          )}
        </ol>
        <ol>
          {props.recipe.steps.map(step => {
            return (<li> {step}</li>);
          }
          )}
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeModal