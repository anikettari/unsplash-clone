import React, { useEffect, useState } from "react";
import axios from "axios";
import Welcome from "./Welcome";
import NavbarPage from "./NavbarPage";
import Explorer from "./Explorer";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("random");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_KEY_API}&query=${query}&page=${page}`;

  const fetchImages = () => {
    axios
      .get(fetchUrl, {
        headers: {},
      })
      .then((response) => {
        setData([...data, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
    setPage(page + 1);
  };
  const searchImages = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
      setData([]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  return (
    <div>
      <NavbarPage />
      <Explorer />
      <Welcome
        searchImages={searchImages}
        data={data}
        fetchImages={fetchImages}
        hasMore={hasMore}
      />
    </div>
  );
};

export default MainPage;
