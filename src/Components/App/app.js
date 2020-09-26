import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import Landing from "../../Routes/Landing/Landing";
import NewUser from "../../Routes/NewUser/NewUser";
import ReturningUser from "../../Routes/ReturningUser/ReturningUser";
//import TokenService from '../../Services/token-service'
//import AuthApiService from '../../Services/auth-api-service'
import Logout from "../../Routes/Logout/Logout";
import Pieces from "../../Routes/Pieces/Pieces";
import Steps from "../../Routes/Steps/Steps";
import NotFoundPage from "../../Routes/NotFoundPage/NotFoundPage";
import StageSelect from "../../Routes/StageSelect/StageSelect";
import About from "../../Rotes/About/About";

const App = () => {
    const [setIsLoggedIn] = useState(false);  
  
    return (
      <div className="App">
  
        <p></p>
        <p></p>
        <main className="AppMain">
          <Switch>
            <Route
              exact path={'/'}
              component={Landing}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={ReturningUser}
            />
             
            <PublicOnlyRoute
              path={'/signup'}
              component={NewUser}
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