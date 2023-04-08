import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";


const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row className="d-flex mt-2 gap-2">
            {device.brands.map(brand => 
                <Card
                    bg={brand.id === device.selectedBrand.id ? 'primary' : null}
                    text={brand.id === device.selectedBrand.id ? 'white' : 'dark'}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)} 
                    style={{cursor: 'pointer'}}
                >
                    {brand.name}
                </Card>
            )}

            
        </Row>
    )
})

export default BrandBar;