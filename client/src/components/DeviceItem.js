import { observer } from "mobx-react-lite";
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/star.svg';
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = observer(({device}) => {
    const history = useHistory();

    return (
        <Col md={3} className="mt-4">
            <Card 
                style={{width: 150, cursor: 'pointer'}} 
                border='light'
                onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
            >
                <Image width={150} height={150} src={device.img}/>
                <div className="d-flex justify-content-between mt-1 text-black-50">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image src={star} width={15} height={15}/>
                    </div>                   
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
})

export default DeviceItem;