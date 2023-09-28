//

const container = document.querySelector('.followers');

const displayFollowers = (followers) => {
  container.innerHTML = followers
    .map((item) => {
      const { login, avatar_url, html_url } = item;
      return `<article class="card">
                    <img src="${avatar_url}" alt="avatar">
                    <h5>${login}</h5>
                    <a href="${html_url}">view profile</a>
                </article>`;
    })
    .join('');
};

export default displayFollowers;
