//

const paginate = (followers, value) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newArray = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newArray;
};

export default paginate;
