import { objEqual } from './objEqual';

const customTest = (idx, obj1, obj2, boolean) => {
  test(`objEqual:${idx}`, () => {
    expect(objEqual(obj1, obj2)).toBe(boolean);
  });
};

const obj1 = {};
const obj2 = {};
const obj3 = { name: 'Paul' };
const obj4 = { name: 'Paul' };
const obj5 = { name: { first: 'Paul', second: 'Johnson' } };
const obj6 = { name: { first: 'Paul', second: 'Johnson' } };

customTest(1, obj1, obj1, true);
customTest(2, obj1, obj2, true);
customTest(3, obj1, null, false);
customTest(4, obj1, obj3, false);
customTest(5, obj3, obj4, true);
customTest(6, obj3, obj5, false);
customTest(6, obj5, obj6, true);
