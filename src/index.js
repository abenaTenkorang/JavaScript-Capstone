import './style.css';
import getData from '../modules/getdata.js';
import showMovies from '../modules/showMovies.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
};
displayItem();