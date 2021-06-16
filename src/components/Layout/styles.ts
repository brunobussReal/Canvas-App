import styled from "styled-components"

export const Grid = styled.div `
  display: grid;
  grid-template-columns: 340px auto;
  grid-template-rows: 60px 50px auto;

  grid-template-areas: 
  "NV NV"
  "MENU TOOL"
  "MS CANVA"
  ;
  height: 100vh;
  overflow: hidden;
`