import { useContext, useEffect } from 'react'
import { Container, Pagination } from 'react-bootstrap'
import { Context } from '..'

const Pages = ({pageCount}) => {
    const {device} = useContext(Context);
    
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

  return (
    <Container>
        <Pagination className="mt-4 d-flex justify-content-center align-items-center" >
            {pages.map(page =>
            <Pagination.Item 
                key={page}
                active={page === device.page}
                onClick={() => device.setPage(page)}
            >
                {page}
            </Pagination.Item>
            )}
        </Pagination>
    </Container>
  )
}

export default Pages