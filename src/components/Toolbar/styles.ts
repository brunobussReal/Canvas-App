import styled, { css } from "styled-components"
import {IoMdRedo, IoMdUndo} from "react-icons/io"
import {FiLayers} from "react-icons/fi"
import {HiOutlineArrowNarrowUp, HiOutlineDuplicate} from "react-icons/hi"
import {RiDeleteBinLine} from "react-icons/ri"

export const Container = styled.div`
  grid-area: TOOL;
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 7px 15px 8px;
  display: flex;
  align-items: center;

  font-size: 13px;
  top: 0;
`;
export const ToolButton = styled.button`
    border: 0;
    border-right: 1px solid #ddd;
    border-radius: 0;
    padding: 0;
    height: 32px;
    width: 64px;
    text-align: center;
    font-size: 16px;
    background-color: white;
    transition: all 150ms;

    cursor: pointer;
    &:hover{
      background-color: lightgray;
    }
`;

const icons = css`
width: 14px;
height: 14px;
`

export const RedoButton = styled(IoMdRedo)`
  ${icons}
`;

export const UndoButton = styled(IoMdUndo)``;

export const DuplicateLayer = styled(HiOutlineDuplicate)``;

export const Layer = styled(FiLayers)``;

export const ArrowUp = styled(HiOutlineArrowNarrowUp)``;

export const ArrowDown = styled(HiOutlineArrowNarrowUp)``;


export const Delete = styled(RiDeleteBinLine)``;
