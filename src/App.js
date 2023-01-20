import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar, { Home } from './resources/dashboard/pages';
import EditTenantPage from './resources/tenant/pages/edit';
import SinginPage from './resources/signin/pages';
import SingupPage from './resources/signup/pages';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
          <Switch className={App}>
            {/* ROOT BLOCK */}
            <Route exact path='/' component={Home}/>
            <Route path='/signin' component={SinginPage} />
            <Route path='/signup' component={SingupPage} />
            <Route path='/edittenant' component={EditTenantPage} />
          </Switch>
    </BrowserRouter>
  
  );
}

export default App;
