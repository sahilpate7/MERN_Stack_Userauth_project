import React from 'react';
import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Userslist from './components/UsersList';

function App() {
  return (
    <div className="App">
      <h2>MERN Stack Project</h2>
      <div className="row">
          <div className="col-md-6">
              <Register />
          </div>
          <div className="col-md-6">
              <Login />
          </div>
      </div>

      <div className="row justify-content-center">
          <div className="col-md-8">
             <Userslist />
          </div>
      </div>
    </div>
  )
};

export default App;
