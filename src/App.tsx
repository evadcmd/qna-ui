import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import 'src/App.css';
import SideNav from './component/SideNav';
import TopNav from './component/TopNav';

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 2em;
`;

export default function App() {
  return (
    <>
      <TopNav />
      <Container>
        <SideNav />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
}
