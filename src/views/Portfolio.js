import React from "react";
import Card from '../components/Card'
import stock from '../projects/stocksimulator.PNG'
import chat from '../projects/chat-app.PNG'
import weather from '../projects/weather.PNG'
import note from '../projects/Notetaker.PNG'
import readme from '../projects/readme.PNG'
import fit from '../projects/fitness.PNG'

function Portfolio(props) {
  return (
    <div className="container">
    <div className = "row pt-4">
      <div className = "col">
        <Card link="https://github.com/Halvosaurus34/WallStreet-Simulator" Img={stock} Title="Stock Simulator" desc="This app uses Alpha Vantage API to display stock prices. Users can buy and sell stock in a virtual environment using simulated currency"></Card>
      </div>
      <div className = "col">
        <Card link="https://github.com/skar45/Project-2" Img={chat} Title="Chatting App" desc="Levraging the power of Web Sockets this chat app allows users to communicate through differnet channels of communication"></Card>
      </div>
      <div className = "col">
        <Card link="https://skar45.github.io/Weather-Dashboard/" Img={weather} Title="Weather Dashboard" desc="This Weather Dashboard utilizes the open weather API to display weather forecasts for any city."></Card>
      </div>
    </div>
    <br></br>
    <div className = "row pb-4">
      <div className = "col">
        <Card link="https://tranquil-hollows-43850.herokuapp.com/" Img={note} Title="NoteTaker" desc="NoteTaker app allows the user to save and delete notes using API routes."></Card>
      </div>
      <div className = "col" >
        <Card link="https://github.com/skar45/README-Generator" Img={readme} Title="ReadMe Generator" desc="A useful utility app for developers to produce a high quality readme"></Card>
      </div>
      <div className = "col" >
        <Card link="https://floating-sierra-50725.herokuapp.com/" Img={fit} Title="Fitness Tracker" desc="An App that keeps track of excercises in a MongoDB database"></Card>
      </div>
    </div>
    </div>
  );
}

export default Portfolio;