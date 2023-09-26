//
const displayButtons = (container, pages, activeIndex) => {
  const btnsArray = pages.map((_, index) => {
    return `<button class="page-btn ${
      activeIndex === index ? 'active' : null
    }" data-label="${index}">${index + 1}</button>`;
  });
  btnsArray.unshift('<button class="prev-btn">prev</button>');
  btnsArray.push('<button class="next-btn">next</button>');
  container.innerHTML = btnsArray.join('');
};

export default displayButtons;
