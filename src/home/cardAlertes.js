import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/pages.css';

export function CardAlertes(props) {
  return (
    <Card className='shadow-lg  rounded'>
      <Card.Header className='alignText'>Alertes</Card.Header>
      <Card.Body>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Button variant="primary" className="btn colorBtnBack alignbtn">Voir plus</Button>
    </Card>
  );
}
export default CardAlertes;