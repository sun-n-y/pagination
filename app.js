//
import fetchFollowers from './utils/fetchFollowers.js';
import displayFollowers from './utils/displayFollowers.js';
import paginate from './utils/paginate.js';
import displayButtons from './utils/displayButtons.js';

const title = document.querySelector('main h1');

let pages = [];
let index = 0;

const setupUI = () => {
  displayFollowers(pages[index]);
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = 'pagination';
  pages = paginate(followers);
  setupUI();
};

window.addEventListener('load', init);
