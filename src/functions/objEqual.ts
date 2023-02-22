export function objEqual(obj1, obj2): boolean {
  // Check if both arguments are objects
  if (
    typeof obj1 !== 'object' || obj1 === null ||
    typeof obj2 !== 'object' || obj2 === null
  ) {
    return obj1 === obj2;
  }

  // Get the keys for both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if both objects have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if both objects have the same keys
  if (!keys1.every(key => keys2.includes(key))) {
    return false;
  }

  // Recursively compare each property of both objects
  return keys1.every(key => objEqual(obj1[key], obj2[key]));
}
