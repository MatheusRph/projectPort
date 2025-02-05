'use client'

import './style.css'
import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardProject({ children, src, title, href }) {
    function handleClick(){
        window.location.href = href;
    }
    return (
        <Card className='flex-column' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body className='flex-column'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {children}
                </Card.Text>
                <Button onClick={handleClick} variant="primary">View Project</Button>
            </Card.Body>
        </Card>
    )
}