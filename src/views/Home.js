import React from "react";
import Card from '../components/Card'
import Gogh from '../a/van-gogh.jpg'
import html from '../logo/HTML5.png'
import js from '../logo/js.png'
import node from '../logo/node.png'
import react from '../logo/Rea.png'
import mongo from '../logo/mongo.png'

function Home(props) {
  //const style = {backgroundImage : Gogh, backgroundSize: "100% 100%"}
  const style={
    background: "transparent"
  }
  const cstyle={
    width:'50%',
    marginLeft: 'auto',
    marginRight: 'auto' 
  }
  return (
    <div>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
      <div class="carousel-item active">
          <div class="card" style={style}>
            <div class="card-body">
              <img src={html} style={cstyle} class="d-flex justify-content-center"></img>
            </div>
          </div>
      </div>
      <div class="carousel-item">
        <div class="card" style={style}>
            <div class="card-body">
            <img src={js} style={cstyle} class="d-flex justify-content-center"></img>
            </div>
          </div>
      </div>
      <div class="carousel-item">
        <div class="card" style={style}>
            <div class="card-body">
            <img src={node} style={cstyle} class="d-flex justify-content-center"></img>
            </div>
          </div>
      </div>
      <div class="carousel-item">
        <div class="card" style={style}>
            <div class="card-body">
            <img src={react} style={cstyle} class="d-flex justify-content-center"></img>
            </div>
          </div>
      </div>
      <div class="carousel-item">
        <div class="card" style={style}>
            <div class="card-body">
            <img src={mongo} style={cstyle} class="d-flex justify-content-center"></img>
            </div>
          </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
