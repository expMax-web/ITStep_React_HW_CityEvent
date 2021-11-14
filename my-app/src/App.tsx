import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import { PerfomancesPage } from "./pages/Perfomances/PerfomancesPage";
import { ConcertsPage } from "./pages/Concerts/ConcertsPage";
import { CinemaPage } from "./pages/Cinema/CinemaPage";
import { Header } from "./component/header/Header";

import styles from "./App.module.css";
import { HomePage } from "./pages/Home/HomePage";

export const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/Cinema" component={CinemaPage} />
        <Route path="/Performances" component={PerfomancesPage} />
        <Route path="/Concerts" component={ConcertsPage} />
        <Route path="/home" component={HomePage} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

// export default App;
