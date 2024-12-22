import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function MyImage() {
  return (
    <Container>
        <Col xs={6} md={4} className='container'>
          <Image src="image.png" className='myimage' roundedCircle />
        </Col>
    </Container>
  );
}

export default MyImage;