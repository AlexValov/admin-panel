import React from 'react';
import styles from './ItemList.module.css'
import Item from './Item/Item'

const ItemList =(props)=> {
  const handleDeleteUser = (id) => {
    props.deleteCar(id)
  }


    const cars = props.cars.map((car) => {
      const { id, ...itemProps } = car
      return (
        <li key={id}>
          <Item
            {...itemProps}
            
          />
       <button onClick={()=>handleDeleteUser(car.id)}>Удалить</button>
       <button onClick={()=> {props.editRow(car)}}> Редактировать </button>
        </li>
      )
    })
    return (
      <div className={styles.CatalogItems}>
        <div className={styles.ItemsWrapper}>
          <h3>Каталог товаров</h3>
  
          <ul>
            {cars}

          </ul>
        </div>
      </div>
    )

  }
export default ItemList;
  
