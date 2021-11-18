import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { PerfomancesPage } from "./pages/Perfomances/PerfomancesPage";
import { ConcertsPage } from "./pages/Concerts/ConcertsPage";
import { CinemaPage } from "./pages/Cinema/CinemaPage";
import { Header } from "./component/header/Header";
import { HomePage } from "./pages/Home/HomePage";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";

import styles from "./App.module.css";
import { AddIventForm } from "./component/AddIventForm/AddIventForm";

export const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/Cinema" component={CinemaPage} />
        <Route path="/Performances" component={PerfomancesPage} />
        <Route path="/Concerts" component={ConcertsPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about/:type/:id" component={InfoPage} />
        <Route path="/Favorites" component={FavoritesPage} />
        <Redirect from="/" to="/home" />
      </Switch>
      <AddIventForm />
    </div>
  );
};

// export default App;
