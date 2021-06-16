import useEventListener from "@use-it/event-listener";
import {createContext, useEffect, useState} from "react"

interface StageProviderProps {
  selectedId: string | null
  stageSize: {
    width: number
    height: number
  }
  checkDeselect: (e:any) => void
  deleteShape: () => void
  setStageSize: React.Dispatch<React.SetStateAction<{ width: number; height: number; }>>
  setStageCenter: React.Dispatch<React.SetStateAction<{ centerX: number; centerY: number; }>>
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>
  stageCenter: {
    centerX: number
    centerY: number
  }
  shapes: ShapeProps[]
  setShapes: React.Dispatch<React.SetStateAction<ShapeProps[]>>
  undo: ShapeProps[][]
  redo: ShapeProps[][]
  setRedo: React.Dispatch<React.SetStateAction<ShapeProps[][]>>

}
interface ShapeProps{
  id: string
  x: number
  y: number
  fill?: string,
  width: number,
  height: number,
  isDragging: boolean,
  innerRadius?: number | null
  outerRadius?: number | null
  type: string
}
const ESCAPE_KEYS = ['27', 'Escape'];
const DELETE_KEYS = ['46', '8', 'Backspace', 'Delete'];

export const stageContext = createContext({} as StageProviderProps)

export function StageProvider({children, ...rest}:any){
  const [undo, setUndo] = useState<ShapeProps[][]>([])
  const [redo, setRedo] = useState<ShapeProps[][]>([])
  const [shapes, setShapes] = useState<ShapeProps[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [stageSize, setStageSize] = useState({
    width: 1280,
    height: 720,
  });
  const [stageCenter, setStageCenter] = useState( {
    centerX: 800,
    centerY: 350,
    })
  function checkDeselect(e:any){
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };
  function handler({ key } : any) {
    if (ESCAPE_KEYS.includes(String(key))) {
      setSelectedId(null)
    }
    if (DELETE_KEYS.includes(String(key))) {
      deleteShape()
    }
  }
  function deleteShape(){
    setShapes(shapes.filter(item => item.id !== selectedId))
  }
  function handleStackLayer(){

  }
  useEventListener('keydown', handler);
  
  useEffect(() => {
    const resize = () =>{
      const width = stageSize.width * 0.98
      const height = stageSize.height * 0.98

      setStageSize({width, height})
    }
    resize()
  }, [])
  useEffect(() => {

    const items = undo.slice()
    items.push(shapes)
    setUndo(items)
    // console.log(undo)
  }, [shapes])
  
  return(
    <stageContext.Provider value={
      {
      selectedId, stageSize, checkDeselect, setStageSize, setSelectedId, stageCenter, setStageCenter, deleteShape, shapes, setShapes, undo, redo, setRedo
     }
     }>
      {children}
    </stageContext.Provider>
  )
}