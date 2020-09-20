import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import Landing from "../../Routes/Landing/Landing";
import SignupPage from "../../Routes/NewUser/NewUser";
import LoginPage from "../../Routes/ReturningUser/ReturningUser";
import IdleService from '../../Services/idle-service'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'
import LogoutPage from "../../Routes/Logout/Logout";
import Pieces from "../../Routes/Pieces/Pieces";
import Steps from "../../Routes/Steps/Steps";
import NotFoundPage from "../../Routes/NotFoundPage/NotFoundPage";
import StageSelect from "../../Routes/StageSelect/StageSelect";
import About from "../../Rotes/About/About";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      IdleService.setIdleCallback(logoutFromIdle)
      if (TokenService.hasAuthToken()) {
        setIsLoggedIn(true)
  
        IdleService.registerIdleTimerResets()
  
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken()
        })
      } 
    },[])
  
    const logoutFromIdle = () => {
      TokenService.clearAuthToken()
      TokenService.clearCallbackBeforeExpiry()
      IdleService.unRegisterIdleResets()
      setIsLoggedIn(false)
    } 
  
    return (
      <div className="App">
        <header className="AppHeader">
          <Header isLoggedIn={isLoggedIn}/>
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
              path={'/signup'}
              component={ReturningUser}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={() => <ReturningUser onLogin={setIsLoggedIn}/>}
              componentProps={{onLogin: setIsLoggedIn}}
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