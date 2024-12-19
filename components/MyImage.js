import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function MyImage() {
  return (
    <Container className='justify-content-end'>
        <Col xs={6} md={4} className='justify-content-end'>
          <Image src="image.png" roundedCircle />
        </Col>
    </Container>
  );
}

export default MyImage;