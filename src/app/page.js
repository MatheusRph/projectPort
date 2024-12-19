import Container from "react-bootstrap/Container";
import "./globals.css";
import MyImage from "../../components/MyImage.js";
import Title from "../../components/Title.js";
import SubleTitle from "../../components/SubleTitle.js";


export default function Home() {
  return (
    <>
      <main className="main">
        <Container className="justify-content-start w-75">
          <Container className="justify-content-start flex-column">
            <Title>Matheus Rodolpho</Title>
            <SubleTitle>Intro Text: Hello! My name is Matheus, I'm 16 years old, and I study at SENAI Pompeia.
              I am currently pursuing a course in Systems Development. My dream is to build a professional career that I can be proud of, which is why I work hard every day. A big part of this dream is to help make the world a better place through technology. I also aspire to travel the world, gain experiences from diverse cultures, and use these insights to create meaningful changes and transform the world into a better place for everyone.</SubleTitle>
          </Container>

          <MyImage></MyImage>
        </Container>
      </main>
    </>
  );
}