"use client"

import React from 'react';
import Card from 'react-bootstrap/Card';

function CardWork({children}) {
  return (
    <Card style={{ width: '8rem', backgroundColor: "rgb(14, 13, 13)"}} className="m-2 text-center align-items-center bg-transparent ">
      <Card.Body style={{ height: '3rem'}} className='d-flex justify-content-center align-items-center'>
        <Card.Title style={{color: 'gray'}} className='cardwork'>{children}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardWork;
