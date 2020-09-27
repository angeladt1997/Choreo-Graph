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
import Steps from "../../Routes/Steps/Steps";
import NotFoundPage from "../../Routes/NotFoundPage/NotFoundPage";
import StageSelect from "../../Routes/StageSelect/StageSelect";
import About from "../../Routes/About/About";

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

          <PrivateRoute 
            path={'/Dashboard'}
            component={DashboardPage}
          />

          <PrivateRoute
            path={'/StageSelect/:id'}
            component={StageSelect}
          />
          <PrivateRoute
            path={'/Pieces'}
            component={Pieces}
          />
          <PrivateRoute
            path={'/Steps'}
            component={Steps}
          />
          <PrivateRoute
            path={'/Logout'}
            component={() => <Logout
              setIsLoggedIn={setIsLoggedIn}
            />}
          />
          <Route
            path={'/About'}
            component={About}
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