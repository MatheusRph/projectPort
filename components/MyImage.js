import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';

function MyImage() {
  return (
    <Container>
        <Col xs={6} md={4} className='container'>
          <Image src="/image.jpg" alt='PROFILE IMAGE' width={325} height={400} className='myimage rounded'/>
        </Col>
    </Container>
  );
}

export default MyImage;