import '../css/pages.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React from "react";
import NavbarComponent from '../navbar/navbar';
import CardAlertes from '../home/cardAlertes';
import { Link } from 'react-router-dom';

function Home(){
  return (
      <div className="Home">
        <div className='colorBack colorNav shadow-lg'>
          <h4 className="text-center colorBack pt-3 pb-3">Gestionnaire des emprunts-IUT La Rochelle</h4>
        </div>
        <header className="Home-header">
          <Container className='sizeCont'>
            <div id='cards' className='d-flex justify-content-between'>
              <div>
                <Link to="/addEmprunt">
                  <Button type="button" className="btn btn-md colorbtn sizeBtn shadow-sm border-0">Faire un emprunt</Button>
                </Link>
                <br></br>
                <br></br>
                <Link to="/showMateriel">
                  <Button type="button" className="btn btn-md colorbtn sizeBtn shadow-sm border-0">Afficher la liste du <br></br>materiel</Button>
                </Link>
                <br></br>
                <br></br>
                <Link to="/showEmprunt">
                  <Button type="button" className="btn btn-md colorbtn sizeBtn shadow-sm border-0">Afficher la liste des <br></br> emprunteurs</Button>
                </Link>
                <br></br>
                <br></br>
                <Link to="/addMateriel">
                  <Button type="button" className="btn btn-md colorbtn sizeBtn shadow-sm border-0">Ajouter un materiel</Button>
                </Link>
              </div>
                <CardAlertes/>
            </div>
          </Container>
        </header>
      </div>
  );
}
export default Home;