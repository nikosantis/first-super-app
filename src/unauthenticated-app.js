import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

const UnauthenticatedApp = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route exact path='/dashboard'>
        <Redirect to='/login' />
      </Route>
    </Switch>
  );
};

export default UnauthenticatedApp;
