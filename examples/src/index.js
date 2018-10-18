import React from 'react';
import { render } from 'react-dom';
import CashId from '../../src';
const App = () => (
  <CashId
    domain="letstrade.cash"
    path="/api/test"
    action="login"
    data="newsletter"
    metadata={{
      required: {
        identity: ['name', 'family'],
        position: ['country'],
        contact: ['email']
      },
      optional: {
        identity: ['age', 'gender'],
        position: ['city']
      }
    }}
    color="orange"
  />
);
render(<App />, document.getElementById('root'));
