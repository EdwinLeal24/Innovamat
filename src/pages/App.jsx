import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./App.module.css";
import Header from "../components/Header";
import router from "../routing/router";

function App() {
  return (
    <Router>
      <div className={style.App}>
        <Header />
        <Switch>
          <main className={style.main}>
            {router.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.isExact}
                component={route.component}
              />
            ))}
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
