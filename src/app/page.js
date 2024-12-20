import Container from "react-bootstrap/Container";
import "./globals.css";
import MyImage from "../../components/MyImage.js";
import Title from "../../components/Title.js";
import SubleTitle from "../../components/SubleTitle.js";
import { Button } from "react-bootstrap";
import styles from './page.module.css';
import CardWork from "../../components/CardWork";



export default function Home() {
  return (
    <>
      <main className="main flex-column">
        <Container className="justify-content-start w-75 mt-5">
          <Container className="justify-content-start flex-column">
            <Title>Matheus Rodolpho</Title>
            <SubleTitle>Intro Text: Hello! My name is Matheus, 
              I'm 16 years old, and I study at SENAI Pompeia.
              I am currently pursuing a course in Systems Development. 
              My dream is to build a professional career that I can be proud of, 
              which is why I work hard every day. A big part of this dream is to 
              help make the world a better place through technology. 
              I also aspire to travel the world, gain experiences from 
              diverse cultures, and use these insights to create meaningful 
              changes and transform the world into a better place for everyone.</SubleTitle>
            <Button variant="success click" className={`${styles.button} w-75`}><p className="textbutton">Let's get start</p></Button>
          </Container>
          <MyImage></MyImage>
        </Container>
        <Container className="justify-content-start w-75 mt-5 flex-column">
          <Container className="justify-content-start">
            <SubleTitle>Worked with:</SubleTitle>
          </Container>
          <Container className="justify-content-start">
            <CardWork className="align-items-center d-flex">NextJs</CardWork>
            <CardWork className="align-items-center d-flex">Boostrap</CardWork>
            <CardWork className="align-items-center d-flex">JavaScript</CardWork>
            <CardWork className="align-items-center d-flex">C++</CardWork>
            <CardWork className="align-items-center d-flex">Azure</CardWork>
            <CardWork className="align-items-center d-flex">Flutter</CardWork>
            <CardWork className="align-items-center d-flex">Figma</CardWork>
            <CardWork className="align-items-center d-flex">MySQL</CardWork>
          </Container>
        </Container>
      </main>
    </>
  );
}