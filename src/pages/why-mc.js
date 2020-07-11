import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import {setFont, setFlexContainer, setColor} from '../css/js/helper-styles'
import {screen} from '../css/js/media-functions'




const Whymc = ()=> {
  return (
    <Layout>
      <SEO title="Why Choose Us?" />
      <WhyWrapper>
        <h1>Why Choose Michele Corley Clinical Skincare?</h1>
      </WhyWrapper>
    </Layout>
  )
}

const WhyWrapper = styled.section`
& h1 {
  background: white;
  width: 70%;
  margin: 0 auto;
  ${setFont({size: "30px", height: "42px", color: setColor.h2, weight: "400"})};
  ${setFlexContainer()};
}


${screen.phone.phone``};
${screen.tablet.tablet``};
${screen.desktop.desktop``};

`;

export default Whymc
