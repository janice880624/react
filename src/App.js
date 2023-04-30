import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import Visuallizations from './components/Visuallizations';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div className="Sidebar">
            <Sidebar />
          </div>

          <div className="Visuallizations">
            <Visuallizations />
          </div>

          <div className="Dashboard">
            <Dashboard />
          </div>
        </div> 
      </Router>
    </div>
  );
}

export default App;