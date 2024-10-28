import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


// Styled Components
const Nav = styled.nav`
  background-color: #1a1a1a;
  padding: 40px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #444;
`;

const Logo = styled.div`
  font-size: 1.2rem;
  color: white;
  padding-left: 150px;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  padding-right: 200px;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const NavLink = styled(Link)`
font-size: 1.1rem;
  color: gray;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const ContactButton = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 8px 16px;
  padding-bottom: 10px;
  background-color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const IconLogo = styled(FontAwesomeIcon)`
  margin-right: 20px; // Adicione espaço entre o ícone e o texto
`;

const Icon = styled(FontAwesomeIcon)`
  padding-left: 10px;
`;

function Navbar() {
  return (
    <Nav>
      <Logo><IconLogo icon={faStar} />Miguel Ferreira</Logo>
      <NavList>
        <NavItem><NavLink to="home" smooth={true} duration={500}>Home</NavLink></NavItem>
        <NavItem><NavLink to="about" smooth={true} duration={500}>About Me</NavLink></NavItem>
        <NavItem><NavLink to="projects" smooth={true} duration={500}>Portfolio</NavLink></NavItem>
        <NavItem>
          <ContactButton to="contact" smooth={true} duration={500}>Contact<Icon icon={faArrowRight} /></ContactButton>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
