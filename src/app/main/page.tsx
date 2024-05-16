import BigPoster from '@/components/BigPoster';
import Poster from '@/components/Poster';
import Previewr from '@/components/Previewr';
import TopRatedMovies from '@/components/TopRatedMovie';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fetchDiscoverMovie } from '@/lib/actions';

const apiEndpoints = {
  popularmovies: '/movie/popular',
  trendingmovies: '/trending/movie/day?language=en-US',
  topratedmovies: '/tv/top_rated',
  ontheairmovies: '/tv/on_the_air',
  nowplayingmovies: '/movie/now_playing',
  upcomingmovies: '/movie/upcoming',
  topRatedMovies: '/movie/popular',
};

export default async function Home() {
  const fetchPopular = await fetchDiscoverMovie(apiEndpoints.popularmovies);
  const fetchTrend = await fetchDiscoverMovie(apiEndpoints.trendingmovies);
  const fetchTopRated = await fetchDiscoverMovie(apiEndpoints.topratedmovies);
  const fetchOnAir = await fetchDiscoverMovie(apiEndpoints.ontheairmovies);
  const fetchNowPlaying = await fetchDiscoverMovie(apiEndpoints.nowplayingmovies);
  const fetchUpComing = await fetchDiscoverMovie(apiEndpoints.upcomingmovies);
  const fetchTopRated1 = await fetchDiscoverMovie(apiEndpoints.topRatedMovies)
  return (
    <div className="flex flex-col h-screen" >
      <Header />
      <div className="flex-1 overflow-auto scrollbar-hide">
        <div className="pb-3">
          <TopRatedMovies fetchData={fetchTopRated1} />
          <Previewr fetchData={fetchNowPlaying} />
          <Poster title="Popular on Netflix" fetchData={fetchPopular} />
          <Poster title="Trending Now" fetchData={fetchTrend} />
          <Poster title="Top 10 in Nigeria Today" fetchData={fetchTopRated} />
          <Poster title="Airing Today" fetchData={fetchOnAir} />
          <Poster title="Now Playing" fetchData={fetchNowPlaying} />
          <Poster title="Upcoming" fetchData={fetchUpComing} />
          <BigPoster title="Netflix Originals" fetchData={fetchPopular} />
          <Poster title="Popular on Netflix" fetchData={fetchPopular} />
          <Poster title="Trending Now" fetchData={fetchTrend} />
          <Poster title="Top 10 in Nigeria Today" fetchData={fetchTopRated} />
          <Poster title="Airing Today" fetchData={fetchOnAir} />
        </div>
      </div>
      <Footer />
    </div>
  );
}