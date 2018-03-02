import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Contact from './Contact';
import About from './About';
import Carousel from './Carousel';
import WorksListContainer from './WorksListContainer';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import Error404 from './Error404';
import InstagramLink from './InstagramLink';
import { Switch, Route, withRouter } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Carousel} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/works' component={WorksListContainer} />
        <Route path='/admin' component={Admin} />
        <Route component={Error404} />
      </Switch>
      <InstagramLink />
    </div>
  );
}

export default withRouter(App);
