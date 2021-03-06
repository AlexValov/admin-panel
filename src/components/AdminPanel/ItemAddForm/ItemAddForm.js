import React, { useState } from 'react';
import styles from './ItemAddForm.module.css'

const ItemAddForm =(props) => {

    const initialFormState = {id: null, name: '', price: '', description: '' }

    const[car, setCar] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget
        setCar({...car, [name]: value})
    }

  
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!car.name || !car.price || !car.description) 
        return 
            props.addCar(car)
            setCar(initialFormState)
    
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

                <button>Добавить товар</button>
            </form>
        )
    }
export default ItemAddForm;

 