import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  width: 10em;
  align-items: flex-start;
  margin: 0;
  padding: 2em;
  overflow-y: auto;
`;

export default function SideNav() {
  return <Nav className="bg-secondary text-white">side</Nav>;
}
