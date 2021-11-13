import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/recipe/:id" component={ri1} /> */}
      </Switch>
    </div>
  );
}

export default App;
// <Footer />
