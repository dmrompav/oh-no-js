export function nuPi(obj, chain) {
  let _obj = obj;

  // Split the chain string into an array of property names
  const props = chain.split('.');

  // Loop through each property in the chain
  for (const prop of props) {
    // Create a new empty object if the property doesn't exist in the object
    if (!Object.prototype.hasOwnProperty.call(_obj, prop) || typeof obj[prop] !== 'object' || obj[prop] === null) {
      _obj[prop] = {};
    }

    _obj = _obj[prop];
  }

  // Return the final object in the chain
  return _obj;
}