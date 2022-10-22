import React, { useEffect, useState } from "react";
import coverpic from "../Images/coverpic.jpg";
import GetImages from "../GetImages";

type MainData ={
 searchImages:()=>void
  fetchImages:()=> void
  hasMore:boolean
  data:{
    urls:{regular:string}
    user:{
      first_name:string
      profile_image:{
        medium:string
      }
    }
  }[]
}

const Welcome = (props:MainData) => {

  

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <>
      <div>
        <img className="cover_pic" src={coverpic} />
        <div className="welcome_absolute">
          <h2 className="title_text">Unsplash</h2>
          <p className="desc_text">The internet’s source for visuals.</p>
          <p className="desc_text">Powered by creators everywhere.</p>
          {windowSize.innerWidth > 480 ? (
            <input
              type="search"
              className="search_bar"
              placeholder="search free high-resolution photos"
              onKeyDown={props.searchImages}
              
            ></input>
          ) : (
            <></>
          )}
        </div>
      </div>
      <GetImages
        images={props.data}
        fetchImages={props.fetchImages}
        hasMore={props.hasMore}
      />
    </>
  );
};

export default Welcome;
