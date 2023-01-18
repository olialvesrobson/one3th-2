import React from 'react'
import './App.css';
import EditTenantPage from './resources/tenant/pages/edit';
// import SinginPage from './resources/signin/pages';
// import SingupPage from './resources/signup/pages';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          My Demo Page
        </p>
        
      </header>
      <div>
        <EditTenantPage />
      </div>
    </div>
  );
}

export default App;
