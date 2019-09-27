import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import layoutRoutes from "./routes/index.jsx";
import Header from "./components/header/Header";
import "assets/scss/app.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex-y fill-height">
          {/* Header View */}
          <header>
            <Header />
          </header>
          {/* Header View */}
          <main className="flex-1">
            {/* Routing View */}
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/welcome" />} />
              {layoutRoutes.map((prop, key) => {
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            {/* Routing View */}
            <div className="author an-15 bold-text black--text">
              By: Chetan Virani
              <div>Volansys Technologies</div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

/* 
  Above Routing View Looking Like this
  <BrowserRouter>
    <Switch>
        <Route path='/welcome' component={ Welcome } />
        <Route path='/class-component' component={ ClassComponent } />
        <Route exact path='/props-state' component={ PropsAndStateDemo } />
    </Switch>
  </BrowserRouter> */
