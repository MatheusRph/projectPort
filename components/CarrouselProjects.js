import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

export default function CarrouselProjects() {
  const [slides, setSlides] = useState([]); // Estado para armazenar os slides

  const airplane = [
    { image: '/airplane/01.jpeg', title: '01' },
    { image: '/airplane/02.jpeg', title: '02' },
    { image: '/airplane/03.jpeg', title: '03' },
    { image: '/airplane/04.jpeg', title: '04' },
    { image: '/airplane/05.jpeg', title: '05' },
    { image: '/airplane/06.jpeg', title: '06' },
    { image: '/airplane/07.jpeg', title: '07' },
    { image: '/airplane/08.jpeg', title: '08' },
    { image: '/airplane/09.jpeg', title: '09' },
    { image: '/airplane/10.jpeg', title: '10' },
    { image: '/airplane/11.jpeg', title: '11' },
    { image: '/airplane/12.jpeg', title: '12' },
    { image: '/airplane/13.jpeg', title: '13' },
    { image: '/airplane/14.jpeg', title: '14' },
    { image: '/airplane/15.jpeg', title: '15' },
    { image: '/airplane/16.jpeg', title: '16' },
    { image: '/airplane/17.jpeg', title: '17' },
    { image: '/airplane/18.jpeg', title: '18' },
    { image: '/airplane/19.jpeg', title: '19' },
    { image: '/airplane/20.jpeg', title: '20' },
    { image: '/airplane/21.jpeg', title: '21' },
    { image: '/airplane/22.jpeg', title: '22' },
    { image: '/airplane/23.jpeg', title: '23' },
    { image: '/airplane/24.jpeg', title: '24' }
  ];
  

  const next = [
    { image: '/images/slide1_y.jpg', title: 'Slide Y1', description: 'Descrição do slide Y1' },
    { image: '/images/slide2_y.jpg', title: 'Slide Y2', description: 'Descrição do slide Y2' },
    // Outros slides do tipo Y
  ];

  useEffect(() => {
    // Verifique se está no lado do cliente para acessar window.location.href
    if (typeof window !== 'undefined') {
      const url = window.location.href; // Obtém a URL completa da página atual
      const regex = /http:\/\/localhost:8080\/projects\/([^\/]+)/;
      const match = url.match(regex);

      if (match) {
        const informação = match[1]; // A informação que você quer coletar
        console.log("Informação coletada:", informação);

        let selectedSlides = []; // Variável para armazenar os slides a serem usados

        // Condicional para escolher qual array de slides usar com base na informação
        if (informação === 'airplane') {
          selectedSlides = airplane;
        } else if (informação === 'next') {
          selectedSlides = next;
        } else {
          console.log("Informação não reconhecida, não há slides.");
        }

        // Se slides foi definido, atualiza o estado
        if (selectedSlides.length > 0) {
          setSlides(selectedSlides);
        }
      } else {
        console.log("Não encontrou a informação na URL.");
      }
    }
  }, []); // Executa o efeito apenas uma vez após o componente ser montado

  return (
    <Carousel data-bs-theme="dark" cycle="true" interval={2200} indicators={false} className="d-flex justify-content-center align-items-center">
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="m-0 justify-content-center align-items-center">
          <Image src={slide.image} loading="eager" layout="intrinsic" alt={slide.title} width={300} height={450} className="rounded mx-auto d-block" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
