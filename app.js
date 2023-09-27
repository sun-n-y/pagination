//
import fetchFollowers from './utils/fetchFollowers.js';
import displayFollowers from './utils/displayFollowers.js';
import paginate from './utils/paginate.js';
import displayButtons from './utils/displayButtons.js';

const title = document.querySelector('main h1');
const btnContainer = document.querySelector('.btn-container');
const itemsPerPageContainer = document.querySelector('.items-per-page');

let pages = [];
let index = 0;
let itemsPerPage = 10;

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = 'pagination';
  pages = paginate(followers, itemsPerPage);
  setupUI();
};

window.addEventListener('load', init);

itemsPerPageContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('items-per-page')) return;
  if (e.target.classList.contains('value')) {
    itemsPerPage = parseInt(e.target.textContent);
    const values = document.querySelectorAll('.value');
    values.forEach((value) => {
      value.classList.remove('active-ipp');
    });
    e.target.classList.add('active-ipp');
    init();
  }
});

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return;
  if (e.target.classList.contains('page-btn')) {
    index = e.target.dataset.label;
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});
