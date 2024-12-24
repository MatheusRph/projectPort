import Container from "react-bootstrap/Container";
import "./globals.css";
import MyImage from "../../components/MyImage.js";
import Title from "../../components/Title.js";
import Text from "../../components/Text";
import { Button } from "react-bootstrap";
import styles from './page.module.css';
import CardWork from "../../components/CardWork";



export default function Home() {
  return (
    <>
      <main className="main flex-column">
        <Container className="justify-content-start w-75 mt-5 childmain">
          <Container className="justify-content-start flex-column">
            <Title>Matheus Rodolpho</Title>
            <Text>Intro Text: Hello! My name is Matheus,
              I'm 16 years old, and I study at SENAI Pompeia.
              I am currently pursuing a course in Systems Development.
              My dream is to build a professional career that I can be proud of,
              which is why I work hard every day. A big part of this dream is to
              help make the world a better place through technology.
              I also aspire to travel the world, gain experiences from
              diverse cultures, and use these insights to create meaningful
              changes and transform the world into a better place for everyone.</Text>
            <Button variant="success click" className={`${styles.button}`}><p className="textbutton">Let's get start</p></Button>
          </Container>
          <MyImage></MyImage>
        </Container>
        <Container className="justify-content-start work mt-5 flex-column">
          <Container className="justify-content-start">
            <Text>Worked with:</Text>
          </Container>
          <Container className="justify-content-start overflow-x-auto">
            <CardWork className="align-items-center d-inline-block d-flex">NextJs</CardWork>
            <CardWork className="align-items-center d-inline-block d-flex">Boostrap</CardWork>
            <CardWork className="align-items-center d-inline-block d-flex">JavaScript</CardWork>
            <CardWork className="align-items-center d-inline-block d-flex">C++</CardWork>
            <CardWork className="align-items-center d-inline-block d-flex">Azure</CardWork>
            <CardWork className="align-items-center d-inline-block d-flex">Flutter</CardWork>
            <CardWork className="align-items-center d-inline-block d-flex">Figma</CardWork>
            <CardWork className="align-items-center d-inline-block d-flex">MySQL</CardWork>
          </Container>
        </Container>
      </main>
    </>
  );
}