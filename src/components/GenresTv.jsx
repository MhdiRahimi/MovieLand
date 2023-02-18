import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from './Loading';

const GenresTv = ({ genre }) => {
  const [genress, setGenress] = useState([]);

  const { data, isFetching } = useQuery(['tvgenre'], async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_KEY}`
    );
    return res.data;
  });
  useEffect(() => {
    setGenress(data?.genres.filter((m) => m?.id === genre));
  }, [genre]);

  if (isFetching) return <Loading />;

  return <span> {genress?.map((gen) => gen?.name)} /</span>;
};

export default GenresTv;
