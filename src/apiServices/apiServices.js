const apiKey = '19490802-1c5184405fc512a55f5ad98ed';
const baseUrl = 'https://pixabay.com/api/';

function fetchImages(searchQuery, page) {
  return fetch(
    `${baseUrl}?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
}

const apiServices = {
  fetchImages,
};

export default apiServices;
