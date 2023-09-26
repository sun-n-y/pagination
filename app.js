//
import fetchFollowers from './utils/fetchFollowers.js';
import displayFollowers from './utils/displayFollowers.js';
import paginate from './utils/paginate.js';
import displayButtons from './utils/displayButtons.js';

const title = document.querySelector('main h1');

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = 'pagination';
};

window.addEventListener('load', init);
