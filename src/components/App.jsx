import React from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'XsVa6qXQohZ6qDGXWz6ouTvpBLXbY72Q',
  https: true
});

function App(props) {
  const [selectedId, setSelectedId] = React.useState("13HgwGsXF0aiGY");
  const [gifIds, setGifIds] = React.useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  // ReactuseState gives us array with two values
  // Instead of storing variable we distructure and give first value of array to selectedId
  // Second value we give to setSelectedGid
  // const selectedIdState = React.useState("13HgwGsXF0aiGY");
  // const selectedId = selectedIdState[0];
  // const setSelectedId = selectedIdState[1];

  // const selectedId = "13HgwGsXF0aiGY";
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];

  function fetchGiphy(keyword) {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = res.data.map((gif) => gif.id);
      setGifIds(ids);
    });
  }

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy}/>
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
