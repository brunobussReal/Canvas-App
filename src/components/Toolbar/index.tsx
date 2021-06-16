import React, { useContext } from 'react';
import { stageContext } from '../../contexts/StageContext';

import { Container, UndoButton, RedoButton, DuplicateLayer, Layer, ArrowDown, ArrowUp, Delete, ToolButton} from './styles';

const Toolbar: React.FC = () => {
const {selectedId, shapes, setShapes, setSelectedId, deleteShape, undo, redo, setRedo} = useContext(stageContext)

  function duplicateLayer(){
    const timestamp = Math.round(new Date().getTime() * (Math.random() * 100)).toString()
    if(selectedId){
      const selectedShape = shapes.find(item => item.id === selectedId)
      if (selectedShape){
          const newShape={
            ...selectedShape
          }
          newShape.id = timestamp
          newShape.x = newShape.x +20
          newShape.y = newShape.y +20
          console.log(newShape)
          setShapes([...shapes, newShape])
          setSelectedId(timestamp)
          setRedo([])
      }
  }

  }
  function LayerUp(){
    const items = shapes.slice();
    const item = items.find(i => i.id === selectedId);
    if(item){
      const index = items.indexOf(item);
      items.splice(index, 1);
      items.splice(index +1 , 0, item );
    }
    setShapes(items)
  }
  function LayerDown(){
    const items = shapes.slice();
    const item = items.find(i => i.id === selectedId);
    if(item){
      let index = items.indexOf(item);
      items.splice(index, 1);
      items.splice(index = index > 0 ? index-1 :  0, 0, item );
    }
    setShapes(items)
  }
  function handleDelete(){
    deleteShape()
  }
  function undleUndo(){
    if(undo.length >= 2){
      const index = undo.length -2
      const item = undo[index]
      const lastItem = undo[undo.length-1]

      setRedo(() => [...redo, lastItem])
      undo.pop()
      setShapes(item)
      undo.pop()
  }
  }
  function undleRedo(){
    if(redo.length >= 1){
      const index = redo.length -1
      const item = redo[index]
      redo.pop()
      setShapes(item)
  }
  }


  return (
    <Container>
      <ToolButton onClick={undleUndo}>
        <UndoButton/>
      </ToolButton>
      <ToolButton onClick={undleRedo}>
        <RedoButton/>
      </ToolButton>
      <ToolButton onClick={duplicateLayer}>
        <DuplicateLayer/>
      </ToolButton>
      <ToolButton onClick={LayerDown}>
        <Layer/>
        <ArrowDown/>
      </ToolButton>
      <ToolButton onClick={LayerUp}>
        <Layer/>
        <ArrowUp/>
      </ToolButton>
      <ToolButton onClick={handleDelete}>
        <Delete/>
      </ToolButton>
    </Container>
  )
}

export default Toolbar;