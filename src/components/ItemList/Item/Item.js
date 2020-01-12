import React from 'react';
import styles from './Item.module.css'

export default class Item extends React.Component {
    render() {
        return (
            <div className={styles.Items}>
                <div className={styles.myFlexContainer}>
                    <div className={styles.myFlexBlock}>{this.props.name}</div>
                    <div className={styles.myFlexBlock}>{this.props.year}</div>
                    <div className={styles.myFlexBlock}>{this.props.price}</div>
                    <button>Ред.</button>
                    <button onClick={this.props.onDeleted}>Удалить</button>
                </div>
            </div>
        )
    };
}



