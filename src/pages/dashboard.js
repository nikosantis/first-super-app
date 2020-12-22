import styled from 'styled-components';
import Layout from '../components/layout';
import { useAuth } from '../contexts/auth-context';

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <Layout title='Dashboard | Nuestra APP'>
      <h1>Dashboard</h1>
      <br />
      <div>
        <Button onClick={logout}>Cerrar Sesión</Button>
      </div>
    </Layout>
  );
};

const Button = styled.button`
  border: mediumaquamarine;
  padding: 50px;
  border-radius: 5px;
  color: black;
`;

export default Dashboard;
