import "./styles.css";

import { useState } from "react";

export default function App() {
  const [value, setvalue] = useState("");
  const [results, setresults] = useState([]);

  const fetchdata = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=XYt_r7VOVgs9bwwCr5ucODmsG3mX6DsBfebDsxmGt-Y&query=${value}&orientation=squarish`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setresults(data.results);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <div className="mydiv">
        <span>PicCanva</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          placeholder="search some Photos:"
        />
        <button
          onClick={() => {
            fetchdata();
          }}
        >
          Send
        </button>
      </div>

      <div className="gallery">
        {/* {results.map((result) => {
          return <img src={result.urls.regular}></img>;
        })} */}
        {results.map((item) => {
          return (
            <img className="images" key={item.id} src={item.urls.regular} />
          );
        })}
      </div>
    </div>
  );
}
