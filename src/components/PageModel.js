import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import {setFont, setFlexContainer, setColor} from '../css/js/helper-styles'
import {screen} from '../css/js/media-functions'


const PageModel = ({title, children})=> {
  return (
    <Layout>
      <SEO title="Page" />
      <PageWrapper>
        <h1>{title}</h1>
        {children}
      </PageWrapper>
    </Layout>
  )
}

const PageWrapper = styled.div`
& h1 {
  background: white;
  width: 100%;
  margin: 0 auto;
  ${setFont({size: "30px", height: "42px", color: setColor.h2, weight: "400"})};
  ${setFlexContainer()};
}
${screen.phone.phone`width: 100%; height: 80vh; margin: 0 auto;`};
${screen.tablet.tablet`width: 100%;  margin: 0 auto;`};

${screen.desktop.desktop`width: 70%; height: 80vh; margin: 0 auto;`};
`;

export default PageModel
