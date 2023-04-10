import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'

export default function Admin() {
  const [typeModalVisible, setTypeModalVisible] = useState(false);
  const [brandModalVisible, setBrandModalVisible] = useState(false);
  const [deviceModalVisible, setDeviceModalVisible] = useState(false);

  const clickHandler = (callback, boolean) => {
    return callback(boolean);
  }

  return (
    <Container className="d-flex flex-column">
      <Button 
        variant="outline-dark" 
        className="mt-2 p-2" 
        onClick={() => clickHandler(setTypeModalVisible, true)}
        >
          Add type
        </Button>
      <Button 
        variant="outline-dark" 
        className="mt-2 p-2" 
        onClick={() => clickHandler(setBrandModalVisible, true)}
        >
          Add brand
        </Button>
      <Button 
        variant="outline-dark" 
        className="mt-2 p-2" 
        onClick={() => clickHandler(setDeviceModalVisible, true)}
        >
          Add device
        </Button>
      <CreateType 
        show={typeModalVisible} 
        onHide={() => clickHandler(setTypeModalVisible, false)}
      />
      <CreateBrand 
        show={brandModalVisible}         
        onHide={() => clickHandler(setBrandModalVisible, false)}
      />
      <CreateDevice 
        show={deviceModalVisible} onHide={() => clickHandler(setDeviceModalVisible, false)}
      />
    </Container>
  )
}

