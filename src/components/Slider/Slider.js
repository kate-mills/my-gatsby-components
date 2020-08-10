import React, {useState, useEffect} from 'react';
import Img from 'gatsby-image'

export default function Slideshow({images=[], interval=3000}){
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{

      const loop = setInterval(()=>{ 
          if(currentSlide === images.length-1){ 
            setCurrentSlide(0); 
          }else{ 
            setCurrentSlide(currentSlide+1); 
          } 
        }, interval); return () => clearInterval(loop);}, [images, currentSlide, interval]);

    return (
        <div data-slideshow className="img-container">
          <Img fluid={images[currentSlide].childImageSharp.fluid} alt="" className="next"/>
        </div>
    )
}