import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import Employs from './Employs';

export default function EmployForm ({employs, setEmploys}) {

    const [body, setBody] = useState('');

    const handleChange = e => {
        setBody(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!body) {
            return alert('Pon algo para postear!')
        }

        axios.post('/post/', {
            body:body
        }).then((response) => {
            setBody('');
            const { data } = response;
            setEmploys([
                ...employs,
                data
            ]).catch(() => {
                alert('Algo fue mal!')
            })
        })
    }

    return (
        <Form onSubmit={handleSubmit}>

            <InputGroup className='mb-3'>

                <FormControl 
                onChange={handleChange}
                value={body}
                type='text'
                placeholder='Type here!'/>

                <Button variant='success' type='submit'>
                    POST
                </Button>

            </InputGroup>

        </Form>
    )
}
