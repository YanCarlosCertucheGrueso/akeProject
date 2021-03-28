import '../src/Styles/appStyle.css';
import Fibo from './Components/Fibo';
import Mult from './Components/Mult';
//import Card from './Components/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MoviesPage from './Components/MoviesPage';

function App() {
  return (
    <Router>
        <div>
          <h4>Prueba Técnica AKELAB - Por : Yan Carlos Certuce Grueso</h4>
          <ul>
            <li>
              <Link to="/puntoUno">Punto 1</Link>
            </li>
            <li>
              <Link to="/puntoDos">Punto 2</Link>
            </li>
            <li>
              <Link to="/puntoTres">Punto 3</Link>
            </li>
          </ul>
      <Switch>
        <Route path="/puntoUno">  
          <div className="containerApp">
            <Fibo></Fibo>
          </div>
        </Route>
        <Route path="/puntoDos">
          <div className="containerApp">
            <Mult></Mult>
          </div>
        </Route>
        <Route path="/puntoTres">
          <div className="containerApp">
            <MoviesPage></MoviesPage>
          </div>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
