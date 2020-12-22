import Layout from '../components/layout';

import { useAuth } from '../contexts/auth-context';

const Login = () => {
  const { login, isLoading } = useAuth();
  return (
    <Layout title='Iniciar Sesión | Nuestra APP'>
      <h1>Iniciar Sesión</h1>
      <button onClick={login}>Login</button>
      {isLoading && <p>Loading ...</p>}
    </Layout>
  );
};

export default Login;
