import { divide } from 'lodash';
import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Navbar from './components/common/navbar';
import Movies from "./components/movies";
import Customers from './components/customers';
import NotFound from './components/common/notFound';
import Rentals from './components/rentals';
import MoviesForm from './components/movieForm';
import LoginForm from './components/common/loginForm';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
class App extends Component  {
  state= {
  }
  render() {
  return (
  <Fragment>
 <ToastContainer/>
  <Navbar/>
  <main className='container'>
  <Switch>
  <Route path="/loginForm" component={LoginForm} />
  <Route path="/movies/:id" component={MoviesForm} />
  <Route path="/movies" component={Movies} />
  <Route path="/register" component={RegisterForm} />
  <Route path="/customers" component={Customers} />
  <Route path="/rentals" component={Rentals} />
  <Route path="/not-found" component={NotFound} />
  <Redirect from='/' exact to ="/movies" />
  <Redirect to="/not-found" />
  </Switch>
  </main>
  </Fragment>
  );}}

export default App;
