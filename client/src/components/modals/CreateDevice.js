import React, { useContext } from 'react';
import { Modal, Form, Button, Dropdown, Col, Row } from 'react-bootstrap';
import { Context } from '../..';

function CreateDevice({show, onHide}) {
    const {device} = useContext(Context);
    const [info, setInfo] = useContext([]);

    const addInfo = () => {
        setInfo([...info, {title: '', desccription: '', number: DataTransfer.now()}]);
    }

  return (
    <Modal
        size="lg"
        centered
        show={show}
        onHide={onHide}
    >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add new device
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type => 
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand => 
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control 
                    className="mt-3"
                    placeholder="Enter name..."
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Enter price..."
                    type="number"
                />
                <Form.Control 
                    className="mt-3"
                    type="file"
                />
                <Button 
                    className="mt-4"
                    onClick={addInfo}
                >
                    Add new property
                </Button>
                {info.map(i =>
                    <Row className='mt-4'>
                        <Col md={4}>
                            <Form.Control 
                                placeholder='Enter name of property...'
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control 
                                placeholder='Enter description...'
                            />
                        </Col>
                        <Button
                            variant='outline-danger'
                        >
                            Delete
                        </Button>
                    </Row>
                )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={onHide}>Add</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice