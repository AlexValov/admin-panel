import React from 'react';
// import styles from './Item.module.css'

const Item = (props) => {
    const car = props.cars.map((car, index) =>
        <li>

            <strong>Марка:</strong> {car.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong> Год выпуска:</strong> {car.year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong> Цена:</strong> {car.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>)
    return (
        <div>
            <ul key={car.index}>
                {car}
            </ul>
        </div>
    )
};

export default Item;


