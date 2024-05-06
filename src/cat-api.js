import axios from 'axios';

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds').then(breeds => {
    return breeds.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios.get('https://api.thecatapi.com/v1/breeds').then(breeds => {
    return breeds.data.find(el => el.id === breedId);
  });
}

export function getCatPhotoByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(info => {
      return info.data;
    });
}
