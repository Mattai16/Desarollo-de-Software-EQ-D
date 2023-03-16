import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';


export default function Employs({ employs = [], setEmploys }) {

    const [show, setShow] = useState(false);
    const [record, setRecord] = useState(null);

    const handleUpdate = async (id, value) => {
        return axios.put(`/put/${id}/`, value)
        .then((reponse) => {
            const { data } = reponse;
            const newEmploys= employs.map (employ => {
                if (employ.id === id) {
                    return data;
                }
                return employ;
            })
            setEmploys(newEmploys)
        }).catch(() => {
            alert('Algo fue mal!')
        })
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleSaveChanges = async () => {
        await handleUpdate(record.id, {body: record.body});
        handleClose();
    }

    const handleChange = (e) => {
        setRecord({
            ...record,
            body: e.target.value
        })
    }

    const handleDelete = (id) => {
        axios.delete(`/delete/${id}`)
        .then(() => {
            const newEmploys = employs.filter(employ => {
                return employ.id !== id
            });
            setEmploys(newEmploys)
        }).catch(() => {
            alert('Algo fue mal!')
        })
    }



    return (
        <div>
        <ListGroup>
            {employs.map( employ => {
                return (
            <ListGroupItem key={employ.id} className='d-flex justify-content-between align-items-center'>

                {employ.body}
                <div>
                <FaEdit
                onClick={() => {setRecord(employ); setShow(true)}}
                size={20} style={{cursor: 'pointer'}}/>
                    &nbsp;
                <FaTrashAlt
                onClick={() => { handleDelete (employ.id) }}
                size={20} style={{cursor: 'pointer'}}/>
                </div>

            </ListGroupItem>
            )
            })}
        </ListGroup>


        <Modal show={show} onHide={handleClose}>

            <ModalHeader closeButton>
                <Modal.Title>
                    EDIT Employ
                </Modal.Title>
            </ModalHeader>

            <Modal.Body>
                <FormControl 
                value={record ? record.body : ''}
                onChange={handleChange}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant='dark' onClick={handleClose}>
                    CERRAR
                </Button>

                <Button variant='dark' onClick={handleSaveChanges}>
                    SAVE
                </Button>
            </Modal.Footer>

        </Modal>
        </div>
    )
}