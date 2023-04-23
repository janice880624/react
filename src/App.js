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
        <Switch>
          <Route path="/" component={Dashboard}></Route>
          <Route path="/Settings" component={Settings}></Route>
          <Route path="/Sidebars" component={Sidebar}></Route>
          <Route path="/Visuallizations" component={Visuallizations}></Route>
        </Switch>
      </Router>
    </div>

    
  );
}

export default App;

