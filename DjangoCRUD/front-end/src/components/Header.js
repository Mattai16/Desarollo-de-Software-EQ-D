import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import gsap from 'gsap'
import React, {useEffect} from 'react';


export default function Header() {

    useEffect(() =>{
        const bar = document.querySelector('.bar')
        gsap.to(bar, {opacity: 1, duration: 1})
 
        
    })

    return (
        <Navbar className='bar' bg='primary' variant='dark'>
            <Container>
                <Navbar.Brand>CRUD Django Employ Equipo D</Navbar.Brand>
               <button>home</button>
            </Container>
        </Navbar>
    )
}