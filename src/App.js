import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CatalogItems from './components/CatalogItems/CatalogItems';
import AdminPanel from './components/AdminPanel/AdminPanel'


export default class App extends React.Component {

  render() {
 

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/"
            render={() => <h2>Главная страница</h2>}
            exact />
          <Route path="/catalog" component={CatalogItems} />
          <Route path="/admin-panel" component={AdminPanel} />
        </div>
      </BrowserRouter>
    );
  };
};