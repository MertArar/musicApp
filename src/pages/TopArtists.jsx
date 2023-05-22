import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Error, Loader, ArtistCard } from "../components";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading songs top charts" />;

  if (error) return <Error />;

  return (
    <div>
      <h2>Top Artists</h2>
      <div>
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};
export default TopArtists;
