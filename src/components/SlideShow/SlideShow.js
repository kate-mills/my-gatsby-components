import React, {useState, useEffect} from 'react';
import './styles.css';

export default function Slideshow({images=[], interval=3000}){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(()=>{
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide].childImageSharp.fluid.src+"')"
        });
        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop); 
    }, [images, currentSlide, interval]);

    return (
        <section className="slideshow">
            <div className="slide-holder">
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail"></div>
                </section>
            </div>
          <div style={{clear: "both"}}/>
        </section>
    )
}
