import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    // implement meeeee! See the readme for instructions
    let myReturn;
    console.log("IM", this.props.IMDBRating)
    if (this.props.IMDBRating != null){
      myReturn = <img src={imgMapper[this.IMDBRating]} alt="" />;
    } else {
      myReturn = <h4>{"No Rating Found"}</h4>
    }
    console.log("generateRating", myReturn)
    return myReturn;
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        { this.generateRatingElement() /* your rating element should go here -- you can invoke methods within JSX, à la: this.myMethod() */ }
        <span />
    <h5 className="genres">{this.props.genres.join(", ")}</h5>
      </div>
    )
  }
}
