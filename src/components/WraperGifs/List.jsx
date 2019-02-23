import React from 'react';
import Gif from './Gif'

const List = ({ gifs }) => (
  <ul>
    {
      gifs.map(item => (
        <Gif
          key={item.id}
          url={item.images.fixed_height_still.url}
          alt={item.title}
        />
      ))
    }
  </ul>
);

export default List;
