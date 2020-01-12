import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import AdminPanel from './components/AdminPanel/AdminPanel';
import ItemAddForm from './components/AdminPanel/ItemAddForm/ItemAddForm';




export default class App extends React.Component {

  maxId = 10;
  
  state = {
    cars: [
      { id: 1, name: 'Ford', year: 2018, price: 7000 },
      { id: 2, name: 'Audi', year: 2015, price: 20000 },
      { id: 3, name: 'bmw', year: 2013, price: 5000 },
      { id: 4, name: 'Man', year: 1988, price: 2000 },
      { id: 5, name: 'Ford', year: 2018, price: 7000 }
    ]
  };

  addItem = (text) => {
    const newItem = {
      id: this.maxId++,
      name: text,
      year: text,
      price: text
    };

    this.setState(({ cars }) => {
      const newArr = [...cars, newItem];
      return {
        cars: newArr
      };
  })
}

  deleteItem = (id) => {
    this.setState(({ cars }) => {
      const index = cars.findIndex((el) => el.id === id);
      const before = cars.slice(0, index);
      const after = cars.slice(index + 1);

      const newArray = [...before, ...after];

      return {
        cars: newArray
      };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <div className="App">
            <Header />
            <Route path="/"
              render={() => <h2>Главная страница</h2>}
              exact />
            <Route path="/admin-panel" component={AdminPanel} />
            <ItemList cars={this.state.cars} onDeleted={this.deleteItem} />
            <ItemAddForm onItemAdded={this.addItem} />
          </div>
        </Layout>

      </BrowserRouter>
    )
  };
};
