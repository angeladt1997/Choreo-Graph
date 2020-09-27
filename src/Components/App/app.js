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
import AuthApiService from '../../Services/auth-api-service'
import Logout from "../../Routes/Logout/Logout";
import Pieces from "../../Routes/Pieces/Pieces";
import Steps from "../../Routes/Steps/2112Steps";
import MSLCRSSteps from "../../Routes/Steps/MSLCRSSteps";
import BairedSteps from "../../Routes/Steps/BairedSteps";
import NotFoundPage from "../../Routes/NotFoundPage/NotFoundPage";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      setIsLoggedIn(true)

      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
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

          <PublicOnlyRoute 
            path={'/Dashboard'}
            component={DashboardPage}
          />

          <PublicOnlyRoute
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
              setIsLoggedIn={setIsLoggedIn}
            />}
          />
          
          <Route 
            component={NotFoundPage}
          />
        </Switch>
      </main>
    </div>
  );
}
  
  export default App;