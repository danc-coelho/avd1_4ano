import React from 'react';

import Home from '../pages/pagina/index';
import Details from '../pages/info/index';

import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/details/:cpf+' component={Details} />
  </Switch>
);

export default Routes;
