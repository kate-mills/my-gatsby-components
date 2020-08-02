import React from 'react'
import Image from 'gatsby-image'

import styled from 'styled-components'

class SlideShow extends React.Component {
  state = {
   active: 0,
    transitionTime: 9000,
  };
  handleShow = () => {
    var slides = document.getElementsByClassName("mySlides");
    for(var i = 0;i<slides.length; i++){
      if (i === this.state.active){
        slides[i].style.display = "contents"
        slides[i].style.opacity = "1"
      }
      else{
        slides[i].style.opacity = "0"
        slides[i].style.display = "none"
      }
    }
    if(this.state.active === slides.length-1){
      this.setState({active: 0})
    }
    else{
      this.setState({active: this.state.active+1})
    }
    setTimeout(this.timerFn, this.state.transitionTime)
  };
  timerFn = () => {
    this.handleShow();
  }
  componentDidMount () {
    this.handleShow()
  }
  render(){
    return(
      <div className={` ${this.props.className}`} id="slideshow">
        <div className="slideshowContainer" >
        {
          this.props.images.map((item, index) =>  {
            return(
              <div key={index} className="mySlides fade" style={{minHeight: "500px"}}>
                <Image style={{margin: "0 auto" }} fluid={item.childImageSharp.fluid} alt="" loading="lazy" className="img"/>
              </div>
            )
        })
        }
        </div>
      </div>
    )
  }
}
export default styled(SlideShow)`
  #slideshow{
  }
  & .slideshowContainer{
  position: sticky;
  height: 533px;
    margin: 0 auto;
    border: 1px solid var(--mccPink);
    width: 80%;
    overflow: hidden;
  }
  & .slideshowContainer:after{
    display: block;
    height: 1px;
  }
  & .img {
    vertical-align: middle;
    box-sizing: border-box;
    object-fit: cover;
  }
  & .mySlides{
    display: none;
    vertical-align: middle;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }
  & .clear{
    display: block;
    font-size:0;
    margin:0;
    padding:0;
    line-height:inherit;
    border: 2px solid red;
    box-sizing: border-box;
  }
  
`
