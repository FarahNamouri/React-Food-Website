import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
const data = [
    {
     image: require('../assets/image1.jpg'), 
     caption:"Caption",
     description:"Salty"
    },
    {
      image:require('../assets/image2.jpg'), 
      caption:"Sweet",
      description:"Crêpes Chocolat"
     },
     {
      image:require('../assets/image3.jpg'), 
      caption:"Salty",
      description:"Noodles & Dumpling"
     } 
  ]

function Meals () {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100 w-25"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    )
}

export default Meals;