//
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const fetchFollowers = async () => {
  const reponse = await fetch(url);
  const data = await reponse.json();
  return data;
};

export default fetchFollowers;
