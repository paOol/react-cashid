# CashID React component

## React component to generate QR code and badgerwallet button using CashID

![badgercashid](https://user-images.githubusercontent.com/5941389/47131161-0a7e4a00-d252-11e8-979c-3f10ac90a809.gif)


## Installation

grab from NPM

```
npm i react-cashid
```

## Usage

```
  import CashId from 'react-cashid';

  <CashId
    domain="domain.com"
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
    qr="true"
  />
```

action, data, and metadata are optional.

Read more about the CashID [Specification](https://gitlab.com/cashid/protocol-specification/tree/master).

### Required

you must be using either the [PHP](https://gitlab.com/cashid/libraries) or [Javascript](https://github.com/paOol/CashID) library for CashID on your backend.
