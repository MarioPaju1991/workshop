import React from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

function App(props) {
  // ReactuseState gives us array with two values
  // Instead of storing variable we distructure and give first value of array to selectedId
  // Second value we give to setSelectedGid
  const [selectedId, setSelectedId] = React.useState("13HgwGsXF0aiGY");
  // const selectedIdState = React.useState("13HgwGsXF0aiGY");
  // const selectedId = selectedIdState[0];
  // const setSelectedId = selectedIdState[1];

  // const selectedId = "13HgwGsXF0aiGY";
  const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];

  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id={selectedId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
}

export default App;
