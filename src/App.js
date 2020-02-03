import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import AdminPanel from './components/AdminPanel/AdminPanel';
import ItemAddForm from './components/AdminPanel/ItemAddForm/ItemAddForm';
import EditItemForm from './components/EditItemForm/EditItemForm'



const App=() => {

    const carsData = [
      { id: 1, name: 'Ford', price: 7000, description: 'Super car' },
      { id: 2, name: 'Audi', price: 20000, description: 'Super car' },
      { id: 3, name: 'bmw',  price: 5000, description: 'Super car' },
      { id: 4, name: 'Man',  price: 2000, description: 'Super car' }
    ];

  const [cars, setCars] = useState(carsData)

  const [editing, setEditing] = useState(false)
  const initialFormState = {id: null, name: '', price: '', description: '' }
  const [currentCar, setCurrentCar] = useState(initialFormState)
  const updateCar = (id, updatedCar) => {

    setEditing(false)
    // и обновляем пользователя, если нашли его по id
    setCars(cars.map(car => (car.id === id ? updatedCar : car)))
  }


  const editRow = car => {
    // готовы редактировать - флажок в true
    setEditing(true)
    // устанавливаем значения полей для формы редактирования
    // на основании выбранного "юзера"
    setCurrentCar({ id: car.id, name: car.name, price: car.price, description: car.description})
  }




 
    const addCar = (car) => {
      car.id = cars.length + 1
      setCars([...cars, car])
    }

    const deleteCar = id => {
      setEditing(false)
      setCars(cars.filter(car => car.id !== id))
    }

    return (
      <BrowserRouter>
        <Layout>
          <div className="App">
            <Header />
            <Route path="/"
              render={() => <h2>Главная страница</h2>}
              exact />
            <Route path="/admin-panel" component={AdminPanel} />
            <EditItemForm  editing={editing} setEditing={setEditing} currentCar={currentCar} updateCar={updateCar}/>
            <ItemList cars={cars} deleteCar={deleteCar} editRow={editRow}/>
            <ItemAddForm  addCar={addCar} />
          </div>
        </Layout>

      </BrowserRouter>
    )
  };


export default App;
