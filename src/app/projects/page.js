'use client'

import ".././globals.css";
import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardProject from "../../../components/CardProject/CardPoject";


export default function Projects() {
    return (
        <>
            <main className="main flex-column">
                <Container className="justify-content-start w-75 mt-5 childmain gap-3">
                    <CardProject title={'Airplan'} className='flex-column'>
                        O projeto de avião foi feito com o intuito
                    </CardProject>
                    <CardProject title={'Next'} className='flex-column'>
                        Um aplicativo streaming de games, porém é apenas um protótipo,
                        com um DB local, firebase, com player feito por biblioteca youtube_player.
                    </CardProject>
                </Container>
            </main>
        </>
    );
}