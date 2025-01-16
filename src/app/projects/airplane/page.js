'use client'


import React from "react";
import style from "./page.module.css"
import { Container } from "react-bootstrap";
import CarrouselProjects from "../../../../components/CarrouselProjects";


export default function Airplane() {

    return (
        <>
            <main className='main flex-column'>
                <Container className={`${style.container} m-5 rounded-4 align-items-center`}>
                    <Container className="flex-column align-items-center">
                        <CarrouselProjects></CarrouselProjects>
                    </Container>
                    <Container className="flex-column align-items-center">
                        <h1>
                            1
                        </h1>
                        <h1>
                            1
                        </h1>
                    </Container>
                </Container>
            </main>
        </>
    );
}