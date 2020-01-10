import React from 'react';
// import styles from './CatalogItems.module.css'
import Item from './Item/Item'

const CatalogItems = () => {
    return (
        <div>
            <h3>Каталог товаров</h3>
            <div>
                <Item />
            </div>
        </div>
    )
};

export default CatalogItems;