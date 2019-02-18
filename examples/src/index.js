import React from 'react';
import { render } from 'react-dom';
import CashId from '../../src';
const App = () => (
  <CashId
    domain='letstrade.cash'
    path='/api/auth'
    action='login'
    data='data'
    color='blue'
  />
);
render(<App />, document.getElementById('root'));
