import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi'
import Pages from '../components/Pages'

const Shop = observer(() => {
  const {device} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
    fetchDevices().then(data => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count)
    });
  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count)
    });
  }, [device.page, device.selectedType.id, device.selectedBrand.id])

  const pageCount = Math.ceil(device.totalCount / device.limit);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
          <Pages pageCount={pageCount}/>
        </Col>
      </Row>
    </Container>
  )
})

export default Shop;
