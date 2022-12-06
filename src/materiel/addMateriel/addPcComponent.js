import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddPcComponent() {
  return (
    <div className='shadow-lg border-0 rounded'>
    <Card>
        <Card.Body>
            <Form>
                <div className='d-flex justify-content-center'>
                    <Form.Group className="mb-2" controlId="formQualite">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Type :</Form.Label>
                        </div>
                        <Form.Select type="text" className='dropdown-button-drop-right'>
                            <option>Ordinateur</option>
                            <option>Téléphone</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-2" controlId="formMarque">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Marque :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Marque" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formModele">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Modele :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Modele" />
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-2" controlId="formProcesseur">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Processeur :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Processeur" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formMemoire">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Mémoire :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Mémoire" />
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-2" controlId="formCarteGraphique">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Carte graphique :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Carte graphique" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formTailleEcran">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Taille d'ecran :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Taille d'ecran" />
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-2" controlId="formDisque">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Disque :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Disque" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formPorts">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Ports :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Ports" />
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-2" controlId="formBatterie">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Batterie :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Batterie" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formCategorie">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Catégorie :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Catégorie" />
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-between'>
                <Form.Group className="mb-2" controlId="forNumInventaire">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Numéro inventaire :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Numéro inventaire" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBonCommande">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Bon de commande :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Bon de commande" />
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-2" controlId="formDateAchat">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Date d'achat :</Form.Label>
                        </div>
                        <Form.Control type="date" placeholder="Date d'achat" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formTarifHt">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Tarif hors taxe :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Tarif hors taxe" />
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-2" controlId="formFournisseur">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Fournisseur :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Fournisseur" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formQuantite">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Quantité :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Quantité" />
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-center'>
                    <Form.Group className="mb-2" controlId="formNumSerie">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Numéro de serie :</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Numéro de serie" />
                    </Form.Group>
                </div>

                <div className='justify-content-center'>
                    <Form.Group className="mb-2" controlId="formDesignation">
                        <div className='d-flex justify-content-center'>
                            <Form.Label>Désignation :</Form.Label>
                        </div>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </div>
               
                <div className='d-flex justify-content-center'>
                    <Button className='colorBtnBack' type="submit">
                        Sauvegarder
                    </Button>
                </div>
            </Form>
        </Card.Body>
    </Card>
    </div>
  );
}
export default AddPcComponent;