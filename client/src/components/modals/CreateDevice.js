import { useState, useContext, useEffect } from 'react';
import { Modal, Form, Button, Dropdown, Col, Row } from 'react-bootstrap';
import { Context } from '../..';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchTypes()
          .then(data => device.setTypes(data));
        fetchBrands()
          .then(data => device.setBrands(data));
          // eslint-disable-next-line
      }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    }

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));

        createDevice(formData).then(data => onHide());
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
                    <Dropdown.Toggle>{device.selectedType.name || 'Choose type'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type => 
                            <Dropdown.Item 
                                key={type.id}
                                onClick={() => {
                                    device.setSelectedType(type);
                                }}
                            >
                                {type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{device.selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand => 
                            <Dropdown.Item 
                                key={brand.id}
                                onClick={() => {
                                    device.setSelectedBrand(brand);
                                }}
                            >
                                {brand.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control 
                    className="mt-3"
                    placeholder="Enter name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Enter price..."
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <Form.Control 
                    className="mt-3"
                    type="file"
                    onChange={selectFile}
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
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                            />
                        </Col>
                        <Col md={5}>
                            <Form.Control 
                                placeholder='Enter description...'
                                className="p-2"
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
        <Button variant="outline-success" onClick={addDevice}>Add</Button>
        </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice