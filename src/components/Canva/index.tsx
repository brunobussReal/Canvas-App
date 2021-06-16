import React, { useCallback, useContext, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import { stageContext } from '../../contexts/StageContext';

import { Container } from './styles';

const Canva: React.FC = ({children}) => {
  const {stageSize, checkDeselect, setStageSize, stageCenter, setStageCenter} = useContext(stageContext)

  const div = useCallback(node => {
    if (node !== null) {
      const height = node.getBoundingClientRect().height
      const width = node.getBoundingClientRect().width

      const centerX = node.getBoundingClientRect().width / 2;
      const centerY = node.getBoundingClientRect().height / 2;
      setStageCenter({centerX, centerY})
      setStageSize({width, height});    
    }
  }, []);
  
  return(
    <Container >  
      <div ref={div}>
        <Stage  className="stage" width={stageSize.width} height={stageSize.height} onMouseDown={e => checkDeselect(e)}
        onTouchStart={e => checkDeselect(e)}>
          <Layer>
              {children}
          </Layer>
        </Stage> 
        </div>
    </Container>
  )
}

export default Canva;