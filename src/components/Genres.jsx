import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Genres = ({ genre, media }) => {
  const [genress, setGenress] = useState([]);
  const [gentv, setGenTv] = useState([]);

  const { data } = useQuery(['genre'], async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}`
    );
    return res.data;
  });
  const { data: tv } = useQuery(['tvgenre'], async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_KEY}`
    );
    return res.data;
  });

  useEffect(() => {
    setGenress(data?.genres.filter((m) => m?.id === genre));
  }, []);

  return (
    <span
    >
      {' '}
      {genress?.map((gen) => gen?.name)} /
    </span>
  );
};

export default Genres;
