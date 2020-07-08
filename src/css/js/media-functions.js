export const screen = {
  phone: { 
    phone:(...args)=>{ return `@media (min-width: 300px) and (max-width: 480px){${args};};`},
  },
  tablet: {
       small: (...args)=>{return`@media(min-width:481px) and (max-width: 767px){${args};};`},
    landscape:(...args)=>{return`@media(min-width:768px) and (max-width:1024px) and (orientation:landscape){${args};};`},
    portrait: (...args)=>{return`@media(min-width:768px) and (max-width:1024px){${args};};`},

    tablet: (...args)=>{return`
        @media(min-width:481px) and (max-width: 767px){${args};};
        @media(min-width:768px) and (max-width:1024px) and (orientation:landscape){${args};};
        @media(min-width:768px) and (max-width:1024px){${args};};
    `},
  },
  desktop: {
    small: (...args)=>{ return`@media (min-width: 1025px) and (max-width:1280px){${args};};`},
    desktop:(...args)=>{ return`
        @media (min-width: 1025px) and (max-width: 1280px) {${args};};
        @media (min-width: 1281px){${args};};
      `},
  },
  font: {
    setFont: ({min_font=15, max_font=20, min_vw=300, max_vw=1600}={}) => {
      return`font-size:calc(${min_font+"px"} + (${max_font} - ${min_font}) * ((100vw - ${min_vw+"px"}) /( ${max_vw} - ${min_vw})))`
    }
  }
};

