import React, { useEffect, useState } from "react";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from "file-saver";

 
type dataProps ={

 
  fetchImages:()=> void
  hasMore:boolean
  images:{
    urls:{regular:string}
    user:{
      first_name:string
      profile_image:{
        medium:string
      }
    }
  }[]
}


const GetImages = (props:dataProps) => {

  const downloadImage = (e:React.MouseEvent<Element, MouseEvent>, image:string) => {
    e.preventDefault();
    saveAs(image, `${image}.jpg`);
  };
  return (
    <div className="gallery_Padding">
      <InfiniteScroll
        dataLength={props.images.length}
        next={props.fetchImages}
        hasMore={props.hasMore}
        loader={<p>Load more...</p>}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="15px">
            {props.images &&
              props.images.map((image, i) => (
                <div className="welcome_relative">
                  <img
                    key={i}
                    src={image.urls.regular}
                    style={{ width: "100%", display: "block" }}
                    className="gallery_pics"
                  />
                  <div>
                    {" "}
                    <Row className="info_card_position borderrr">
                      <Col className="borderrr" lg="1" xs="3">
                        {" "}
                        <img
                          src={image && image.user.profile_image.medium}
                          className="card_user_image"
                        ></img>
                      </Col>
                      <Col className="borderrr" lg="8" xs="6">
                        {" "}
                        <p style={{ marginLeft: "15px" }}>
                          {image.user.first_name}
                        </p>
                      </Col>
                      <Col
                        className="download_btn borderrr text-center"
                        lg="2"
                        xs="3"
                        onClick={(e) => downloadImage(e, image.urls.regular)}
                      >
                        <AiOutlineDownload />
                      </Col>
                    </Row>
                  </div>
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </div>
  );
};

export default GetImages;
