import React from 'react'

/*import {setFont, setFlexContainer, setColor} from '../css/js/helper-styles'*/
import {screen} from '../css/js/media-functions'

import PageModel from '../components/PageModel'
import styled from 'styled-components'

const Whymc = ()=> {
  return (
    <PageModel title="Why Choose Michele Corley Clinical Skincare?">
      <WhyWrapper>
      </WhyWrapper>
    </PageModel>
  )
}

const WhyWrapper = styled.section`
${screen.phone.phone``};
${screen.tablet.tablet``};
${screen.desktop.desktop``};
`;

export default Whymc
