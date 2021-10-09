import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./App.module.css";
import Header from "../components/Header";
import Talleres from "../components/Talleres";
import Rincones from "../components/Rincones";
import Deatil from "./Detail";

function App() {
  return (
    <Router>
      <div className={style.App}>
        <Header />
        <Switch>
          <main className={style.main}>
            <Route path="/rincones">
              <Rincones />
            </Route>
            <Route exact path="/">
              <Talleres />
            </Route>
            <Route path="/resource/:id">
              <Deatil />
            </Route>
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
