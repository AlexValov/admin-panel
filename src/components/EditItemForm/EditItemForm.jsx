import React, { useState, useEffect } from 'react';
import styles from '../AdminPanel/ItemAddForm/ItemAddForm.module.css'

const EditItemForm =(props) => {

    const[car, setCar] = useState(props.currentCar)

    useEffect(()=> {
        setCar(props.currentCar)
    },[props])



    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCar({...car, [name]: value})
    }

  
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!car.name || !car.price || !car.description) 
        return 
            props.updateCar(car.id, car)
            
        }
        
        
        
        return (
            <form onSubmit={handleSubmit} className={styles.addForm}
              >
                <label>Название товара</label>
                <input
                    type='text'
                    placeholder='Название'
                    name='name'
                    value={car.name}
                    onChange={handleInputChange}
                />
                <label>Стоимость товара</label>
                <input
                    type='text'
                    placeholder='Год'
                    name='price'
                    value={car.price}
                    onChange={handleInputChange}
                />
                <label>Описание товара</label>
                <input
                    type='text'
                    placeholder='Цена'
                    name='description'
                    value={car.description}
                    onChange={handleInputChange}
                />

                <button> Обновить товар</button>
                <button onClick={() => props.setEditing(false)}>
                   Отмена
                </button>
            </form>
        )
    }
export default EditItemForm;

 