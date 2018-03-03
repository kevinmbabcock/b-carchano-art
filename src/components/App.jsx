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
import AddWork from './AddWork';
import EditBio from './EditBio';
import InquiriesListContainer from './InquiriesListContainer';

function App(){
  return (
    <div className='container'>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Carousel} />
        <Route exact path='/admin' component={Admin} />
        <Route path='/contact' component={ContactControl} />
        <Route path='/about' component={About} />
        <Route path='/works' component={WorksListContainer} />
        <Route path='/admin/add-work' component={AddWork} />
        <Route path='/admin/edit-work' component={WorksListContainer} />
        <Route path='/admin/edit-bio' component={EditBio} />
        <Route path='/admin/inquiries' component={InquiriesListContainer} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
