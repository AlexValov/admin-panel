import React, { Component } from 'react';
import styles from './ItemAddForm.module.css'

export default class ItemAddForm extends Component {
    // state = {
    //     name: '',
    //     year: '',
    //     price: ''
    // };

    // onLabelChange = (e) => {
    //     this.setState({
    //         name: e.target.value,
    //         year: e.target.value,
    //         price: e.target.value
    //     });
    // };

    onSubmitHandler = (event) => {
        event.preventDefault()
    };

    render() {
        return (
            <form onSubmit={this.submitHandler} className={styles.addForm}
                onSubmit={this.onSubmit}>

                <input
                    type='text'
                    placeholder='Название'
                    />
                <input
                    type='text'
                    placeholder='Год'
                     />
                <input
                    type='text'
                    placeholder='Цена'
                     />
                <button onClick={this.addItemHandler}>Добавить товар</button>
            </form>
        )
    }
};

