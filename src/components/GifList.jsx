import React from 'react';
import Gif from './Gif';

function GifList({ gifIds, setSelectedId }) {
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  return (
    // Iterating over gifidlist strings
    // gifIds is JS and we need curly brackets in order to iterate over them
    <div className="gif-list">
      { gifIds.map((gifId) => <Gif id={gifId} key={gifId} setSelectedId={setSelectedId} />) }
    </div>
  );
}

export default GifList;
