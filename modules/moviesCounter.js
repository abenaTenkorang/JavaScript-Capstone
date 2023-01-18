const countComments = (response) => (typeof (response) === 'object' ? response.length : 'no match');
export default countComments;