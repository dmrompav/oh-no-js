# Getting started

:::warning
  This module's development still in process.  
  You may create a PR in the repo, if you are interested in [**"Oh no! JS!"**](https://github.com/dmrompav/oh-no-js)
:::

## About
A functions' library that makes JS syntax easier.

## Install
```shell
npm install oh-no-js
#or
yarn add oh-no-js
```

Import functions you need:
```javascript
import { objEqual, nuPi } from 'oh-no-js';
```

Use them. Example:
```javascript
const obj1 = { name: { first: 'Walter', second: 'White' } };
const obj2 = { name: { first: 'Walter', second: 'White' } };

const areEqual = objEqual(obj1, obj2); // expected true
```

```javascript
const obj = {};

nuPi(obj, 'prop1.prop2').prop3 = 'Hello!';

// Expected:
// obj = { prop1: { prop2: { prop3: 'Hello!' } } };
```

For more information open [documentation](/documentation/).
