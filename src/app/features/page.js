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
                        <Container className="flex-column">
                            <Subtitle>The start:</Subtitle>
                            <Text className="m-5">
                                Defining the beginning of my story will always be
                                something difficult, but it started in 2019, when I was 10 years old. At that time, the world seemed like a much simpler place, although it hadn't always been that way for me. I was always the child who questioned and reflected on the reason behind small things, perhaps that's why I learned life lessons that shouldn't have been part of my childhood. Moving on, a friend introduced me to a game I already knew, but in a different, more <u>pleasurable</u> way (keep that word in mind). It was at that moment, spending my afternoons playing Minecraft, that I had my first contact with programming, since the game's community is very active, especially through servers that create applications to build new games for players. It was here that I began to discover what I would do with my life.</Text>
                        </Container>
                        <Container className="flex-column">
                            <Subtitle>The road</Subtitle>
                            <Text className="">
                                I believe life is very complex, not because it is difficult to understand, but because it is always changing. Changes happen so we can achieve our dreams. We can’t always face them with a smile on our face, but one day that moment comes for everyone, and it was no different for me.</Text>
                            <Text>
                                The year was 2021, and my family began facing some financial difficulties, which ended up being one of the reasons for me to change schools. I took several exams to try to get a scholarship. I did well in some, but not well enough to be accepted. However, my mother found the last hope—and what a great salvation it was.
                                By 2022, I started studying at the new school. There, in addition to learning about professional life, I was introduced to programming and various essential topics that other schools wouldn’t teach.
                            </Text>
                            <Text>
                                The school I am referring to is Senai Pompeia. Here, I want to delve deeper into the experiences I had because I am extremely grateful and still have much to thank this school for. I believe the most important lesson I learned from this institution was gratitude. When we don’t understand what’s happening, we tend to complain, but there I learned that in these moments, the people around us—those we often think don’t care about us—end up doing much more than we imagine.
                                During my first and second years, I had the opportunity to participate in various projects aimed at professional development. However, many times, the goal goes far beyond professionalism, seeking to leave an insight through the background experience.
                            </Text>
                            <Text>
                                This was present in the airplane project, the TBR robot, and others. However, before finishing this topic, I refer to it as "The Road" because I woke up at 5:30 AM for 610 days to go study and only returned at 5:30 PM, sometimes arriving home as late as 7:00 PM. Our life is like a car on a road—it can be one-way, two-way, and there may be other drivers making mistakes, but the one who follows the path they desire is always the driver at the wheel. We are the owners of our lives, and at the moment, I’m still on "The Road."
                            </Text>
                            <Text>
                                In 2025, I’ll finish this stage, and then I’ll update this webpage with some stories and maybe other things. Until then, wish me good luck—or better yet, we’ve got this. All it takes is staying strong and moving forward. Know when the driver needs to rest to avoid accidents, but also know when it’s time to get back on track.
                            </Text>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </main>
    );
}