const URL = 'https://api.tvmaze.com/shows';
const getData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default getData;