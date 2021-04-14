
import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './view/Home'
import About from './view/About'
import Product from './view/Product'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/product' component={Product}></Route>
        <Footer />
       </Router>
    </div>
  );
}
export default App;
