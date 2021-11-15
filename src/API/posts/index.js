const API_KEY = `e517d763dbmsh73ba5966d15ee6fp156bddjsn44ff9836e2ba`;

export const getPostsFetch = () =>
  fetch('https://tiktok33.p.rapidapi.com/trending/feed', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': API_KEY,
    },
  })
    .then(response => {
      response.json();
    })
    .catch(error => {
      console.error('error', error);
    });
