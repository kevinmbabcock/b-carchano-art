import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import ContactControl from './ContactControl';
import About from './About';
import Carousel from './Carousel';
import WorksListContainer from './WorksListContainer';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Carousel} />
        <Route exact path='/admin' component={Admin} />
        <Route path='/contact' component={ContactControl} />
        <Route path='/about' component={About} />
        <Route path='/works' component={WorksListContainer} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
