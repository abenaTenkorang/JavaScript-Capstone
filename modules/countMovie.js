import getData from './getdata.js';

const countedMovies = document.querySelector('.movie-no');

const count = async () => {
  const moviesNumber = await getData();
  const total = moviesNumber.length;
  countedMovies.textContent = `Movies(${total})`;
  return total;
};

count();

export {count} ;