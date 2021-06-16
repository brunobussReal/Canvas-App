import React, { useContext } from 'react';
import { stageContext } from '../../contexts/StageContext';
import { Container, StarIcon, SquareIcon, RectIcon, Button, CircleIcon} from './styles';

const ShapeSection: React.FC = () => {

  const {stageCenter,setSelectedId, setRedo, setShapes, shapes} = useContext(stageContext)

  function addStar(){
    var timestamp = Math.round(new Date().getTime() * (Math.random() * 100));
    const newShape={
      type: "star" ,
      id: timestamp.toString(),
      x: stageCenter?.centerX,
      y: stageCenter?.centerY,
      isDragging: false,
      fill: '#555555',
      width: 100,
      height: 100,
      innerRadius: 60,
      outerRadius: 150,
      
    }

    setShapes(() => [...shapes, newShape])
    setSelectedId(timestamp.toString())
  }
  function addRect(){
    const timestamp = Math.round(new Date().getTime() * (Math.random() * 100));
    const newShape={
      type: "rect" ,
      id: timestamp.toString(),
      x: stageCenter?.centerX - 300 / 2,
      y: stageCenter?.centerY - 150 / 2,
      isDragging: false,
      fill: '#555555',
      width: 300,
      height: 150,
    }
    setShapes(() => [...shapes, newShape])
    setSelectedId(timestamp.toString())
    setRedo([])
  }
  function addSquare(){
    const timestamp = Math.round(new Date().getTime() * (Math.random() * 100));
    const newShape={
      type: "square" ,
      id: timestamp.toString(),
      x: stageCenter?.centerX - 300 / 2,
      y: stageCenter?.centerY - 300 / 2,
      isDragging: false,
      fill: '#555555',
      width: 300,
      height: 300,
    }
    setShapes(() => [...shapes, newShape])
    setSelectedId(timestamp.toString())
    setRedo([])
  }
  function addCircle(){
    const timestamp = Math.round(new Date().getTime() * (Math.random() * 100));
    const newShape={
      type: "circle" ,
      id: timestamp.toString(),
      x: stageCenter?.centerX,
      y: stageCenter?.centerY,
      isDragging: false,
      fill: '#555555',
      width: 300,
      height: 300,
    }
    setShapes(() => [...shapes, newShape])
    setSelectedId(timestamp.toString())
    setRedo([])
  }
  function addStokeStar(){
    const timestamp = Math.round(new Date().getTime() * (Math.random() * 100));
    const newShape={
      type: "square" ,
      id: timestamp.toString(),
      x: stageCenter?.centerX - 300 / 2,
      y: stageCenter?.centerY - 300 / 2,
      isDragging: false,
      fill: '#555555',
      width: 300,
      height: 300,
    }
    setShapes(() => [...shapes, newShape])
    setSelectedId(timestamp.toString())
    setRedo([])
  }
  function addStokeSquare(){
    const timestamp = Math.round(new Date().getTime() * (Math.random() * 100));
    const newShape={
      type: "square" ,
      id: timestamp.toString(),
      x: stageCenter?.centerX - 300 / 2,
      y: stageCenter?.centerY - 300 / 2,
      isDragging: false,
      fill: '#555555',
      width: 300,
      height: 300,
    }
    setShapes(() => [...shapes, newShape])
    setSelectedId(timestamp.toString())
    setRedo([])
  }
  function addStokeRect(){
    const timestamp = Math.round(new Date().getTime() * (Math.random() * 100));
    const newShape={
      type: "square" ,
      id: timestamp.toString(),
      x: stageCenter?.centerX - 300 / 2,
      y: stageCenter?.centerY - 300 / 2,
      isDragging: false,
      fill: '#555555',
      width: 300,
      height: 300,
    }
    setShapes(() => [...shapes, newShape])
    setSelectedId(timestamp.toString())
    setRedo([])
  }
  return (
    <Container>
      <div className="row">
        <Button  onClick={addStar}>
          <StarIcon/>
        </Button>
        <Button  onClick={addSquare}>
          <SquareIcon/>
        </Button>
        <Button onClick={addRect}>
          <RectIcon/>
        </Button>
      </div>
      <div className="row">
        <Button  onClick={addCircle}>
          <CircleIcon/>
        </Button>
        <Button  onClick={addSquare}>
          <SquareIcon/>
        </Button>
        <Button onClick={addRect}>
          <RectIcon/>
        </Button>
      </div>
      <div className="row">
        <Button  onClick={addStar}>
          <StarIcon/>
        </Button>
        <Button  onClick={addSquare}>
          <SquareIcon/>
        </Button>
        <Button onClick={addRect}>
          <RectIcon/>
        </Button>
      </div>
    </Container>
  )
}

export default ShapeSection;