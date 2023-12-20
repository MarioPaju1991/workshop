import React from 'react';

function Gif({ id, setSelectedId }) {
  // const id = "13HgwGsXF0aiGY";
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  function handleClick () {
    // Reset the selected id on the left gif to the id of gif on what was clicked
    setSelectedId(id);
  }
  return (
    <img className="gif" src={url} alt="" onClick={handleClick} />
  );
}

export default Gif;
