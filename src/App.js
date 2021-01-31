import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Info from './pages/Info';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/info" component={Info} />

      </Switch>
    </Router>
  );
}

export default App;
