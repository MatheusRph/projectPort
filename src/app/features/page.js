import Container from "react-bootstrap/Container";
import ".././globals.css";
import MyImage from "../../../components/MyImage.js";
import Title from "../../../components/Title.js";
import SubleTitle from "../../../components/SubleTitle.js";


export default function Feature() {
    return (
        <>
            <main className="main">
                <Container className="justify-content-start w-75">
                    <Container className="justify-content-start flex-column">
                        <Title>Feature</Title>
                    </Container>
                    <MyImage></MyImage>
                </Container>
            </main>
        </>
    );
}