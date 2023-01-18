import countComments from './moviesCounter.js';

test('count the number of comments are return number', () => {
  const testData = [
    {
      item_id: 1,
      username: 'monica',
      comment: 'loved it',
    },
    {
      item_id: 2,
      username: 'abi',
      comment: 'good Movie',

    },
    {
      item_id: 3,
      username: 'abi',
      comment: 'enjoyed it',

    },
  ];
  const response = countComments(testData);
  expect(response).toBe(3);
});
test('properlly displays the error', () => {
  const testData = 'invalid';
  const response = countComments(testData);
  expect(response).toBe('no match');
});
test('properlly counts the number of comments for an array', () => {
  const testData = ['a', 'b', 'c'];
  const response = countComments(testData);
  expect(response).toBe(3);
});