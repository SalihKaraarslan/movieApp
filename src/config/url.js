const url = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '?api_key=579c7fc7840ab037036071939351dc60&language=en-US&page=1',
  image_w780: 'https://image.tmdb.org/t/p/w780/',
};
const weeklyTrendingMoviesUrl = `${url.baseUrl}trending/movie/week${url.apiKey}`;
const genres = `${url.baseUrl}/genre/movie/list${url.apiKey}`;

export {url, weeklyTrendingMoviesUrl, genres};
