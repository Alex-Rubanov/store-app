import { useState, useContext } from 'react';
import { Modal, Form, Button, Dropdown, Col, Row } from 'react-bootstrap';
import { Context } from '../..';

function CreateDevice({show, onHide}) {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
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
            <Form className="p-2">
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
                <br/>
                <Button 
                    className="mt-4"
                    onClick={addInfo}
                >
                    Add new property
                </Button>
                {info.map(i =>
                    <Row className='mt-3' key={i.number}>
                        <Col md={5}>
                            <Form.Control 
                                placeholder='Enter name of property...'
                            />
                        </Col>
                        <Col md={5}>
                            <Form.Control 
                                placeholder='Enter description...'
                                className="p-2"
                            />
                        </Col>
                        <Col md={2}>
                            <Button
                                variant='outline-danger'
                                className="p-2"
                                onClick={() => removeInfo(i.number)}
                            >
                                Delete
                            </Button>
                        </Col>
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