import React from 'react';
// import styles from './CatalogItems.module.css'
import Item from './Item/Item'

const state = {
    cars:[
      {id: 1, name: 'Ford', year: 2018, price: 7000},
      {id: 1, name: 'Audi', year: 2015, price: 20000},
      {id: 1, name: 'bmw', year: 2013, price: 5000},
      {id: 1, name: 'Man', year: 1988, price: 2000},
      {id: 1, name: 'Ford', year: 2018, price: 7000}
    ]
  }

const CatalogItems = () => {

      return (
        <div>
            <h3>Каталог товаров</h3>
            <div>
                <Item  cars={state.cars}/>
            </div>
        </div>
    )
};

export default CatalogItems;