import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/dashboard';

const AuthenticatedApp = () => {
  return (
    <Switch>
      <Route exact path='/dashboard'>
        <Dashboard />
      </Route>
      <Route exact path='/'>
        <Redirect to='/dashboard' />
      </Route>
      <Route exact path='/login'>
        <Redirect to='/dashboard' />
      </Route>
    </Switch>
  );
};

export default AuthenticatedApp;
