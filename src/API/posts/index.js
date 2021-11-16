// const API_KEY = `e517d763dbmsh73ba5966d15ee6fp156bddjsn44ff9836e2ba`;
const API_KEY = `c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66`;

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
