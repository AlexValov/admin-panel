import React from 'react';
import styles from './Item.module.css'

export default class Item extends React.Component {
    render() {
        return (
            <div className={styles.Items}>
                <div className={styles.myFlexContainer}>
                    <div className={styles.myFlexBlock}>{this.props.name}</div>
                    <div className={styles.myFlexBlock}>{this.props.price}</div>
                    <div className={styles.myFlexBlock}>{this.props.description}</div>

                </div>
               
            </div>
        )
    };
}



