import React, {Component} from 'react';
import styles from './ItemList.module.css'
import Item from './Item/Item'

export default class ItemList extends Component {
  
  render() {
    const onDeleted = this.props.onDeleted
    const cars = this.props.cars.map((car) => {
      const { id, ...itemProps } = car
      return (
        <li key={id}>
          <Item
            {...itemProps}
            onDeleted = {()=> onDeleted(id)}
          />
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
  };
  
