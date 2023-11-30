import styled from '@emotion/styled';
import reactLogo from 'src/asset/react.svg';

const Nav = styled.div`
  position: sticky;
  top: 0;
  height: 4em;
  width: 100vw;
  margin: 0 auto;
`;

const Img = styled.img`
  margin-right: 0.5em;
`;

export default function TopNav() {
  return (
    <Nav className="p-3 bg-dark text-white">
      <Img src={reactLogo} alt="React logo" />
      QnA Demo
    </Nav>
  );
}
