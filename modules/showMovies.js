import { getLikes } from './involvementApi.js';
// import { popupCommentListener } from './commentItemPopup.js';

const mainPage = document.querySelector('.main-js-page');

const showMovies = async (data) => {
  for (let i = 0; i < data.length; i += 1) {
    const movieDisplay = document.createElement('div');
    movieDisplay.classList.add('content');
    const movieCard = document.createElement('div');
    movieCard.classList.add('card-image');
    const Img = document.createElement('img');
    Img.setAttribute('src', `${data[i].image.medium}`);
    Img.setAttribute('alt', `affiche of ${data[i].name}`);
    Img.setAttribute('class', 'movie-img');
    const movieDescript = document.createElement('div');
    movieDescript.classList.add('movie-descrption');
    const movieRating = document.createElement('div');
    movieRating.setAttribute('class', 'movie-ratings');
    const title = document.createElement('h2');
    title.classList.add('movie-title');
    title.textContent = `${data[i].name}`;
    const stats = document.createElement('span');
    stats.classList.add('statistics');
    const like = document.createElement('i');
    like.setAttribute('class', 'fa like-btn fa-heart');
    like.setAttribute('id', `${data[i].id}`);
    like.setAttribute('aria-hidden', 'true');
    const likeCount = document.createElement('p');
    likeCount.setAttribute('class', 'rateCounts');
    likeCount.setAttribute('Id', `${data[i].id}`);
    likeCount.textContent = '0';
    stats.append(like);
    movieRating.appendChild(stats);
    movieDescript.append(title, movieRating);
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('movie-comment');
    commentBtn.setAttribute('movie-Id', `${data[i].id}`);
    commentBtn.id = `${data[i].id}`;
    commentBtn.textContent = 'Comments';
    movieDescript.append(commentBtn);
    movieDisplay.append(Img, movieDescript);
    mainPage.appendChild(movieDisplay);

    const updateLikes = async () => {
      const response = await getLikes();
      const counts = document.querySelectorAll('.rateCounts');

      counts.forEach((button) => {
        response.forEach((res) => {
          if (button.id === res.item_id) {
            button.textContent = res.likes;
          }
        });
      });
      stats.append(likeCount);
    };
    updateLikes();
  }
};
export default showMovies;
