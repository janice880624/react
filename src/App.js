import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import Visuallizations from './components/Visuallizations';

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <hr />
        <Switch>
          <Route exact path="/"><Dashboard/></Route>
          <Route path="/Settings"><Settings/></Route>
          <Route path="/Visuallizations"><Visuallizations/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
