export const transition = "transition: all .5s ease-in-out;";

export const setColor = {
  mainWhite: "#ffffff",
  mainBlack: "#222",
  mainGrey: "#a19996",
  mainText: "#5c5c5c",
  lightGrey: "#d3d3d3",
  mccPink: "#ff655d", //mccPink
  h2: "rgba(179,0,0,0.8)",
}

export const setFont =  ({family="'proxima-nova', 'sans-serif'", size="15px", height="32px", color="#111111", style="normal", weight="300"}={}) => {
  return `
  font-family: ${family};
  font-size: ${size};
  line-height: ${height};
  color: ${color};
  font-style: ${style};
  font-weight: ${weight};
  `;
}

//flex-start flex-end
export const setFlexContainer = ({x="center", y="center"}={}) => {
  return `display:flex;justify-content:${x};align-items:${y};`
}

export const setBackground = ({img='', color='rgba(0,0,0,0)'}={}) => {
  return` background: linear-gradient(${color}, ${color}), url(${img}) center/cover fixed no-repeat`;
}

