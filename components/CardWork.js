"use client"

import React from 'react';
import Card from 'react-bootstrap/Card';

function CardWork({ children }) {
  return (
    <Card style={{
      width: "128px", // Define um tamanho inicial para desktop
      minWidth: "100px", // Garante que o tamanho mínimo seja respeitado
      maxWidth: "128px", // Define um limite máximo, se necessário
      backgroundColor: "rgb(14, 13, 13)",
    }}
      className="m-2 text-center align-items-center bg-transparent item">
      <Card.Body style={{
        height: "3rem",
        minHeight: "3rem", // Garante altura mínima no celular
        width: "100%",
      }} className='d-flex justify-content-center align-items-center'>
        <Card.Title style={{ color: 'gray' }} className='cardwork'>{children}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardWork;
