import React,{Component} from 'react';


import TopNavBar from './components/TopNavBar';
import Home from './components/Home';
import Services from './components/Services';
import Instructor from './components/Instructor';
import Support from './components/Support';
import Contact from './components/Contact';
import Book from './components/Book';
import Footer from './components/Footer';
import UserInfo from './components/UserInfo';
import Payment from './components/Payment';


import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {

  render () {
    return (

      <div className = "App" key={Math.random} >

      <BrowserRouter>
            
          <TopNavBar className="navigation"/>

            <Switch>
              <Route exact path='/Home' component={Home} />
              <Route exact path='/Services' component={Services} />
              <Route exact path='/Instructor' component={Instructor} />
              <Route exact path='/Support' component={Support} />
              <Route exact path='/Contact' component={Contact} />
              <Route exact path='/Book' component={Book} />
              <Route exact path='/UserInfo' component={UserInfo} />
              <Route exact path='/Payment' component={Payment} />
              <Route render={() => <Redirect to="/Home"/>} />
            </Switch>

      </BrowserRouter> 

      <Footer />

      </div>

    );
  }
}

export default App
