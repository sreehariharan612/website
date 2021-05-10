import React from 'react';
import Navbar from './component/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Products from './component/pages/Product';
import Signup from './component/pages/Signup';
import Footer from './component/Footer';

function App() {
  return (
   <>
     <Router>
      <Navbar/>
      
       <Switch>
         <Route exact path='/' component={Home}></Route>
         <Route exact path='/services' component={Services}></Route>
         <Route exact path='/products' component={Products}></Route>
         <Route exact path='/sign-up' component={Signup}></Route>
       </Switch>
       <Footer/>
     </Router>
     
    </>
  );
}

export default App;
