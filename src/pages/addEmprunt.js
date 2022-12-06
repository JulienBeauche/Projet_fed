import '../css/pages.css';
import React from "react";
import { Container } from "react-bootstrap";
import AddEmpruntComponent from "../emprunt/addEmprunt/addEmpruntComponent";
import NavbarComponent from "../navbar/navbar";
  
const AddEmprunt = () => {
  return (
    <div>
      <div className='colorBack colorNav shadow-lg'>
        <h4 className="text-center colorBack pt-3">Faire un emprunt</h4>
        <NavbarComponent/>
      </div>
      <header className="Add-emprunt">
        <Container className='justify-content-around col-md-4 pb-4'>
          <AddEmpruntComponent/>
        </Container>
      </header>
    </div>
  );
};
  
export default AddEmprunt;