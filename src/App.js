
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/User/Dashboard';

function App() {
 
  return (
    <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/dashboard/state' component={Dashboard}></Route>
      <Route path='/dashboard/day' component={Dashboard}></Route>
      <Route path='/dashboard/tested' component={Dashboard}></Route>
      
    </Switch>
  );
}

export default App;
