import './App.css';
import axios from 'axios';
import Nav from './Components/nav';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/signup';
import Logout from './Components/logout';

// const url = "https://blogshere.herokuapp.com/";



function App() {
  var url = "http://localhost:5000/";
    const [details, setDetails] = useState('');
    const getData = async () =>{
      const data = await axios.get(url);
      setDetails(data.data);
    };
    return ( <div className = "App" > 
    <Router>
  <Nav/>
    <Switch>
      <Route exact path="/" render={()=>{
        if(localStorage.getItem('token')){
          return ( <div>
            <br />
            <br />
            <button onClick={getData} id="refresh_button">Refresh</button>
            <br />
            <br />
            {details}
            </div>
          );
        }
        else{
          return(
            <div>
              You must login to view this page.
            </div>
          )
        }
      }}>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/logout" onClick={console.log("logged out")}>
        <Logout/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
    </Switch>
  </Router>
        </div>
    );
}
export default App;