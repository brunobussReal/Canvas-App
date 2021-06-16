import styled from "styled-components"

export const Container = styled.div`
  grid-area: MENU;

  background-color: #f1f1f1;
  border-right: 1px solid gray;
`;

export const Button = styled.div`
    display: flex;
    align-items: center;
    background: #f4f4f4;
    color: #555;
    padding: 8px 11px 7px;
    border-right: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    border-radius: 0;
    font-size: 11px;
    width: 20%;
    max-width: 20%;
    height: 50px;
    overflow: hidden;
    cursor: pointer;
`