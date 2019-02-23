import React from 'react';

const Gif = ({ url, alt }) => (
  <li><img src={ url } alt={ alt }/></li>
)

export default Gif;
