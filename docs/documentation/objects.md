# Objects

## nuPi
```javascript
const obj = {};

nuPi(obj, 'prop1.prop2').prop3 = 'Hello!';

// Expected:
// obj = { prop1: { prop2: { prop3: 'Hello!' } } };
```
**Nu**llish coalescing **pi**pe - check if every prop in "props pipe"
is an object and then check deeper again.

### params
|name|type|description|
| -- | :--: | --: |
|**obj**|object|defined object which deep props you need to check|
|**chain**|string|props name separated by dots ('.')|

### returns
object - link to the last prop

## objEqual
```javascript
const obj1 = { name: { first: 'Jesse', second: 'Pinkman' } };
const obj2 = { name: { first: 'Jesse', second: 'Pinkman' } };

const areEqual = objEqual(obj1, obj2); // expected true
```
**objEqual** - compare every prop between objects and then compare deeper again

### params
|name|type|description|
| -- | :--: | --: |
|**obj1, obj2**|object|-|

### returns
boolean - full compliance of all deep props
