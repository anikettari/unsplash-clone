import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Explorer = () => {
  return (
    <>
      <Row className="margin_zero">
        <Col lg="2" className="border_right">
          <button className=" explorer_btn">Editorial</button>
          <button className=" explorer_btn">Following</button>{" "}
        </Col>
        <Col lg="10">
          <div className="explore_oveflow">
            <button className=" explorer_btn">Food & Drink</button>
            <button className=" explorer_btn">Current Events</button>
            <button className=" explorer_btn">Wallpapers</button>
            <button className=" explorer_btn">3D Renders</button>
            <button className=" explorer_btn"> Textures & Patterns</button>
            <button className=" explorer_btn">Experimental</button>
            <button className=" explorer_btn">Architecture</button>
            <button className=" explorer_btn">Nature</button>
            <button className=" explorer_btn">Business & Work</button>
            <button className=" explorer_btn">Fashion</button>
            <button className=" explorer_btn">Film</button>
            <button className=" explorer_btn">Health & wellness</button>
            <button className=" explorer_btn">Experimental</button>
            <button className=" explorer_btn">Architecture</button>
            <button className=" explorer_btn">Nature</button>
            <button className=" explorer_btn">Business & Work</button>
            <button className=" explorer_btn">Fashion</button>
            <button className=" explorer_btn">Film</button>
            <button className=" explorer_btn">Health & wellness</button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Explorer;
