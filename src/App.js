import React from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store';

//Components
import Header from './components/Header';
import NewProduct from './components/NewProduct'
import Products from './components/Products'
import UpdateProduct from './components/UpdateProduct'



function App() {
  return (

    <Router>
      <Provider store={store}>
        <Header/>
      <div className="container">
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/products/new" component={NewProduct} />
        <Route exact path="/products/update/:id" component={UpdateProduct} />
      </Switch>
      </div>
      </Provider>
    </Router>
    
  
  );
}

export default App;
