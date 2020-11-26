import React from "react";

function Card(props) {
  const style={
    height: "100px",
    width:'50%',
    marginLeft: 'auto',
    marginRight: 'auto' 
  }
  return (
    <div className="card float-left" style={{width: '18rem'}}>
      <img src={props.Img} className="card-img-top" alt="..." style={style} />
      <div className="card-body">
        <h5 className="card-title" style={{color: props.titlecolor}}>{props.Title}</h5>
        <p className="card-text">
          {props.desc}
        </p>
        <a href={props.link} className="btn btn-primary">
          {props.Title}
        </a>
      </div>
    </div>
  );
}

export default Card;
