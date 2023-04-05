import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';

export default function AppRouter() {
    const isAuth = false;

  return (
    <Switch>
        {isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact />  
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact />  
        )}
        <Redirect to={'/'} />
    </Switch>
  )
}