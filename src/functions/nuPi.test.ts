import { nuPi } from './nuPi';

const customTest = (idx, obj, chain, result) => {
  test(`nuPi:${idx}`, () => {
    nuPi(obj, chain);
    expect(obj).toEqual(result);
  });
};

const obj1 = {};
const chain1 = 'prop';
const result1 = { prop: {} };

const obj2 = {};
const chain2 = 'prop.value.value2';
const result2 = { prop: { value: { value2: {} } } };

const obj3 = { name: 'Paul' };
const chain3 = 'name.first';
const result3 = { name: { first: {} } };
const result3_special = { name: { first: { value: 'Paul' } } };

customTest(1, obj1, chain1, result1);
customTest(2, obj2, chain2, result2);
customTest(2, obj3, chain3, result3);

test('nupi:special', () => {
  nuPi(obj3, chain3).value = 'Paul';
  expect(obj3).toEqual(result3_special);
});
