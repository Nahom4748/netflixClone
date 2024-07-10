const key = import.meta.env.VITE_API_KEY;

const moviedata = {
  Details: {
    Path: `movie/`,
    url: `?api_key=${key}&language=en-US`,
  },
  Next_Watch: `movie/now_playing?api_key=${key}&language=en-US`,
  Upcoming: `movie/upcoming?api_key=${key}&language=en-US`,
  Action: `discover/movie?api_key=${key}&with_genres=28&sort_by=popularity.desc`,
  netflixorginal: `discover/tv?api_key=${key}&with_networks=213`,
  comedy: `/discover/movie?api_key=${key}&with_genres=35`,
  Documentaries: `discover/movie?api_key=${key}&with_genres=99`,
  Family: `/discover/movie?api_key=${key}&with_genres=10751`,
  Horror: `/discover/movie?api_key=${key}&with_genres=27&sort_by=popularity.desc`,
  Suspense: `/discover/movie?api_key=${key}&with_genres=53&sort_by=popularity.desc`,
  RealLife: `/discover/movie?api_key=${key}&with_genres=18&sort_by=popularity.desc`,
  GetIn: `/discover/movie?api_key=${key}&with_genres=28&sort_by=popularity.desc`,
  Africa: `/discover/movie?api_key=${key}&with_genres=10751`,
  Pop: `/discover/movie?api_key=${key}&sort_by=popularity.desc`,
};
export default moviedata;
