import React from "react";
import { Card, Container, Form } from "react-bootstrap";
import AddPcComponent from "../materiel/addMateriel/addPcComponent";
import NavbarComponent from "../navbar/navbar";
  
const AddMateriel = () => {
  return (
    <div>
      <div className='colorBack colorNav shadow-lg'>
        <h4 className="text-center colorBack pt-3">Ajout de materiel</h4>
        <NavbarComponent/>
      </div>
      <header className="Add-emprunt">
        <Container className='justify-content-around col-md-5 pb-4'>
          <AddPcComponent/>
        </Container>
      </header>
    </div>
  );
};
export default AddMateriel;