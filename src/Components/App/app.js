import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from '../NavBar/NavBar';
import DashboardPage from '../../Routes/DashboardPage/DashboardPage';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import Landing from "../../Routes/LandingPage/LandingPage";
import NewUser from "../../Routes/NewUserPage/NewUserPage";
import LoginPage from "../../Routes/LoginPage/LoginPage";
import TokenService from '../../Services/token-service'
import Logout from "../../Routes/Logout/Logout";
import Pieces from "../../Routes/Pieces/Pieces";
import Steps from "../../Routes/Steps/Steps";
import MSLCRSSteps from "../../Routes/Steps/MSLCRSSteps";
import BairedSteps from "../../Routes/Steps/BairedSteps";
import NotFoundPage from "../../Routes/NotFoundPage/NotFoundPage";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      setIsLoggedIn(true)
    } 
  },[])


  return (
    <div className="App">
    <header className="App_NavBar">
      <NavBar isLoggedIn={isLoggedIn}/>
    </header>
      <p></p>
      <p></p>
      <main className="AppMain">
        <Switch>
          <Route
            exact path={'/'}
            component={Landing}
          />
          
          <PublicOnlyRoute
            path={'/NewUser'}
            component={NewUser}
          />

          <PublicOnlyRoute
            path={'/login'}
            component={() => <LoginPage onLogin={setIsLoggedIn}/>}
            componentProps={{onLogin: setIsLoggedIn}}
          />
       
          
          <PrivateRoute 
            path={'/DashboardPage'}
            component={DashboardPage}
          />

          <PrivateRoute
            path={'/Pieces'}
            component={Pieces}
          />
          <PrivateRoute
            path={'/2112'}
            component={Steps}
          />
          <PrivateRoute
            path={'/MSLCRS'}
            component={MSLCRSSteps}
          />

          <PrivateRoute
            path={'/Baired'}
            component={BairedSteps}
          />
          <PrivateRoute
            path={'/Logout'}
            component={() => <Logout
              setIsLoggedIn={false}
            />}
          />
          
          {
            //route that requires no authentication at all, just returns 404
          }
          <Route 
            component={NotFoundPage}
          /> 
        </Switch>
      </main>
    </div>
  );
}
  
  export default App;
