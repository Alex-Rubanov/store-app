import { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { createType } from '../../http/deviceApi';

export default function CreateType({show, onHide}) {
    const [value, setValue] = useState('');

    const addType = () => {
        createType({name: value})
            .then(data => {
                setValue('');
                onHide();
            });
    };


  return (
    <Modal
        size="lg"
        centered
        show={show}
        onHide={onHide}
    >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add new type
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control 
                    placeholder='Add type...'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addType}>Add</Button>
        </Modal.Footer>
    </Modal>
  )
}
