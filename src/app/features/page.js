import React from "react";
import Container from "react-bootstrap/Container";
import ".././globals.css";
import MyImage from "../../../components/MyImage.js";
import Title from "../../../components/Title.js";
import Subtitle from "../../../components/Subtitle";
import Text from "../../../components/Text.js";


export default function Feature() {
    return (
        <main className="main flex-column">
            <Container className="justify-content-start w-75 mt-5 childmain">
                <Container className="justify-content-start flex-column">
                    <Title>The journey of life</Title>
                    <Container className="flex-column">
                        <Subtitle>The start:</Subtitle>
                        <Text className="m-5">
                            Defining the beginning of my story will always be
                            something difficult, but it started in 2019, when I was 10 years old. At that time, the world seemed like a much simpler place, although it hadn't always been that way for me. I was always the child who questioned and reflected on the reason behind small things, perhaps that's why I learned life lessons that shouldn't have been part of my childhood. Moving on, a friend introduced me to a game I already knew, but in a different, more <u>pleasurable</u> way (keep that word in mind). It was at that moment, spending my afternoons playing Minecraft, that I had my first contact with programming, since the game's community is very active, especially through servers that create applications to build new games for players. It was here that I began to discover what I would do with my life.</Text>
                    </Container>
                </Container>
            </Container>
        </main>
    );
}