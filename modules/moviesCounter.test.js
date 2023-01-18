/**
 * @jest-environment jsdom
 */
import { count } from "./countMovie";
// import 'whatwg-fetch'
import "isomorphic-fetch"

document.body.innerHTML = `<div class="main-container">
<div class="nav">
  <div class="nav-img"></div>
  <div class="search-tag">
    <form class="search" id="" action="">
      <input class="search-input" type="text" name="search" placeholder="Search">
      <button class="btn-srch" type="submit">
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  </div>
  <div class="nav-m">
    <ul class="nav-items">
      <li><a href="#" class="movie-no">Movie(0)</a></li>
      <li><a href="#">Series</a></li>
      <li><a href="#">Soaps</a></li>
    </ul>
  </div>
</div> 
<main class="main-js-page">
  <!-- js files goes here -->
</main>
<div class="popup">
  <!-- js files goes here -->
</div>
<footer>
  <div class="foot-left">
    <p>All Rights Reserved</p>
  </div>
  <div class="foot-right">
    <p>Made with <i class="fa-solid fa-heart"></i> by Abi And Monica</p>
  </div>
</footer>
</div>`

describe('Test movies counter on homepage', ()=> {
    test('Movies(240)', ()=> {
        const movieCounter = document.querySelector('.movie-no');
        count(240)
        expect(movieCounter.innerText).toEqual('Movies(240)')
    })
})