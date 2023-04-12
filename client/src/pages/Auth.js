import { useState, useContext } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
  const {user} = useContext(Context);
  const history = useHistory();

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;

      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      user.setUser(data);
      user.setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.mesage)
    }
  }

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 50}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            placeholder="Enter email..."
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="mt-3"
            placeholder="Enter password..."
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin 
              ?
              <div>
                Don't have account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
              </div>
              :
              <div>
                Have already account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
              </div>
            }
          <Button
            className="mt-3 align-self-end"
            variant="outline-success"
            onClick={click}
          >
            {isLogin ? 'Log in' : 'Registration'}
          </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth;
