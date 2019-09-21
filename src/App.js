import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import layoutRoutes from "./routes/index.jsx";
import Header from "./components/header/Header";
import "assets/scss/app.scss";

const history = createBrowserHistory();

const App = () => {
  return (
    <div className="App">
        <Router history={history}>
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
                                history={history}
                            />
                            );
                        })}
                    </Switch>
                    {/* Routing View */}
                    <div className="author an-15 bold-text black--text">
                        By: Chetan Virani
                        <div>
                            Volansys Technologies
                        </div>
                    </div>
                </main>
            </div>
        </Router>
    </div>
  );
};

export default App;
