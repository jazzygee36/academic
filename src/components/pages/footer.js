import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return(
<div className='footer p-2'>
<Container>
      <Row>
        <Col  className="text-white"><h6>Contact Us:</h6>
</Col>
        <Col > <h6 className="text-white"><i class="fa fa-phone-square contact" aria-hidden="true"></i>08181256788</h6>
    <h6 className="text-white"><i class="fa fa-whatsapp contact" aria-hidden="true" ></i>08136668316</h6></Col>
      </Row>
      
    </Container>
    </div>
    )
}
export default Footer