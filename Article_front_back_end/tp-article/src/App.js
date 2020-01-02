import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
import ArticlesList from './components/ArticlesList';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


class App extends Component {
 
 
  render() {
    return (
    <Router>
      <div>
        
        <hr />
        <NavBar/> 
          <Switch>
            <Route path='/' component={Home} exact  />
            <Route path='/about' component={About} />
            <Route path='/ArticlesList' component={ArticlesList} />
            <Route exact path='/Article/:id' component={Article} />
            <Route  component={NotFound} />
          </Switch>
          
      </div>
    </Router>


    );
  }
}

export default App;