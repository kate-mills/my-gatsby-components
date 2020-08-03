import React, {useState, useEffect} from 'react';
import './styles.css';

export default function Slideshow({images=[], interval=3000}){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imgSet, setImgSet] = useState(null);
    const [cls, setCls] = useState('next')

    useEffect(()=>{
      setCls('next');
      setImgSet(images[currentSlide].childImageSharp.fluid.srcSet);

      const loop = setInterval(()=>{ 
          if(currentSlide === images.length-1){ 
            setCurrentSlide(0); 
          }else{ 
            setCurrentSlide(currentSlide+1); 
          } 
        }, interval); return () => clearInterval(loop);}, [images, currentSlide, interval]);

    return (
        <div data-slideshow className="img-container">
          <img srcSet={imgSet}  className={cls} alt="" />
        </div>
    )
}
