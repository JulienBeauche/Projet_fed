import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
   <container className=''>
      <Navbar className="nav justify-content-center">
          <Navbar.Brand as={Link} to="/" className='colorNav mr-auto'>Accueil</Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to="/showEmprunt" assName='colorNav'>Voir Emprunts</Nav.Link>
              <Nav.Link as={Link} to="/showMateriel" className='colorNav'>Voir Materiels</Nav.Link>
              <Nav.Link as={Link} to="/addEmprunt" className='colorNav'>Faire un emprunts</Nav.Link>
              <Nav.Link as={Link} to="/addMateriel" className='colorNav'>Ajout materiels</Nav.Link>
            </Nav>
      </Navbar>
    </container>
  );
}

export default NavbarComponent;