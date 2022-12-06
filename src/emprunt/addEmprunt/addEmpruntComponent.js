import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddEmpruntComponent() {
  return (
    <div className='shadow-lg border-0 rounded'>
    <Card>
        <Card.Body>
            <Form>
                <Form.Group className="mb-2" controlId="formQualite">
                    <Form.Label>Qualité :</Form.Label>
                    <Form.Select type="text" className='dropdown-button-drop-right'>
                        <option>Types</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-2" controlId="formNom">
                    <Form.Label>Nom :</Form.Label>
                    <Form.Control type="text" placeholder="Nom" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formPrenom">
                    <Form.Label>Prénom :</Form.Label>
                    <Form.Control type="text" placeholder="Prénom" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formEmail">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" placeholder="email" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formTel">
                    <Form.Label>Téléphone :</Form.Label>
                    <Form.Control type="tel" placeholder="Téléphone" pattern="[0-9]{10}" required />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formMateriels">
                    <Form.Label>Materiels :</Form.Label>
                    <Form.Select type="text">
                        <option>Choisir un materiel</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formAccessoires">
                    <Form.Label>Accessoires :</Form.Label>
                    <Form.Select type="text">
                        <option>Choisir un accessoire</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-2 pb-3" controlId="formdate">
                    <Form.Label>Durée :</Form.Label>
                    <div className='d-flex justify-content-between col-xs-2'>
                        <div class="col-md-5">
                            <Form.Control type="date"/>
                        </div>
                        <h6>à</h6>
                        <div class="col-md-5">
                            <Form.Control type="date" />
                        </div>                    
                    </div>
                </Form.Group>

                <div className='d-flex justify-content-center'>
                    <Button className='colorBtnBack' type="submit">
                        Enregistrer
                    </Button>
                </div>
            </Form>
        </Card.Body>
    </Card>
    </div>
  );
}
export default AddEmpruntComponent;