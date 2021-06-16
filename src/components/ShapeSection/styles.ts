import styled, { css } from "styled-components"
import {IoStar, IoStarSharp, IoSquareSharp} from "react-icons/io5"
import {BsFillCircleFill} from "react-icons/bs"
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  div.row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
`;

export const Button = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

const icons = css`
  width: 50px;
  height: 50px;
  fill: #555555;
  margin: 2px;

`

export const StarIcon= styled(IoStarSharp)`
  ${icons}
`;

export const SquareIcon= styled(IoSquareSharp)`
  ${icons}

`;
export const RectIcon= styled(IoSquareSharp)`
  ${icons}

`;

export const CircleIcon= styled(BsFillCircleFill)`
  ${icons}
`;

export const EllipseIcon= styled(IoSquareSharp)`
  ${icons}
`;

export const TriangleIcon= styled(IoSquareSharp)`
  ${icons}
`;

export const PentagoneIcon= styled(IoSquareSharp)`
  ${icons}
`;

export const StokeStarIcon= styled(IoSquareSharp)`
  ${icons}
`;

export const StokeSquareIcon= styled(IoSquareSharp)`
  ${icons}
`;

export const StrokeRectIcon= styled(IoSquareSharp)`
  ${icons}
`;

export const StrokeCircleIcon= styled(IoSquareSharp)`
  ${icons}
`;

export const StokeEllipseIcon= styled(IoSquareSharp)`
  ${icons}
`;
