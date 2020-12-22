import { useAuth } from './contexts/auth-context';
import UnauthenticatedApp from './unauthenticated-app';
import AuthenticatedApp from './authenticated-app';

const App = () => {
  const { isAuth } = useAuth();

  return <div>{isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
};

export default App;
