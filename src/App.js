import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import WeatherContainer from './components/Weather/WeatherContainer';
import Users from './components/Users/Users';
import Form from './components/Form/Form';
import TodoLists from './components/TodoLists/TodoLists';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className= 'main'>
       <Route exact path = '/' component = {Users}/>
       <Route path = '/form' component = {Form}/>
       <Route path = '/todos' component = {TodoLists}/>
       <Route path='/weather' component={WeatherContainer}/>
      </div>
    
    </div>
  );
}

export default App;
