import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';
import Visuallizations from './components/Visuallizations';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/Settings" component={Settings}></Route>
          <Route exact path="/Visuallizations" component={Visuallizations}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
