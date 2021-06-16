import React, { useCallback, useContext, useState } from 'react';
import { stageContext } from '../../contexts/StageContext';
import Canva from '../Canva';
import MenuSection from '../MenuSection';
import Navbar from '../Navbar';
import CircleShape from '../Shapes/CircleShape';
import MyStar from '../Shapes/MyStar';
import Rectangle from '../Shapes/Rectangle';
import Toolbar from '../Toolbar';

import { Grid } from './styles';

const Layout: React.FC = () => {

  const {selectedId, setSelectedId, shapes, setShapes, setRedo } = useContext(stageContext)

  return (
    <Grid>
      <Navbar/>
      <MenuSection/>
      <Toolbar/>
             <Canva>
               {shapes.map((shape, i:any) => {
                 if(shape.type === "star"){
                 return (
                  <MyStar 
                  key={i}
                  shapeProps={shape}
                  isSelected={selectedId === shape.id}
                  onSelect={() => {
                    setSelectedId(shape.id);
                  }}
                  onChange={(newAttrs: any) => {
                    const newStar = shapes.slice();
                    newStar[i] = newAttrs;
                    setShapes(newStar);
                    setRedo([])
                  }}
                  />
                 )}
                 if(shape.type === "rect"){
                   return (
                    <Rectangle
                    key={i}
                    shapeProps={shape}
                    isSelected={shape.id === selectedId}
                    onSelect={() => {
                      setSelectedId(shape.id);
                    }}
                    onChange={(newAttrs: any) => {
                      const rects = shapes.slice();
                      rects[i] = newAttrs;
                      setShapes(rects);
                      setRedo([])
                    }}
                  />
                   )
                 }
                 if(shape.type === "circle"){
                  return (
                   <CircleShape
                   key={i}
                   shapeProps={shape}
                   isSelected={shape.id === selectedId}
                   onSelect={() => {
                     setSelectedId(shape.id);
                   }}
                   onChange={(newAttrs: any) => {
                     const circle = shapes.slice();
                     circle[i] = newAttrs;
                     setShapes(circle);
                     setRedo([])
                   }}
                 />
                  )
                }
                if(shape.type === "square"){
                  return (
                   <Rectangle
                   key={i}
                   shapeProps={shape}
                   isSelected={shape.id === selectedId}
                   onSelect={() => {
                     setSelectedId(shape.id);
                   }}
                   onChange={(newAttrs: any) => {
                     const circle = shapes.slice();
                     circle[i] = newAttrs;
                     setShapes(circle);
                     setRedo([])
                   }}
                 />
                  )
                }
               } )}
       
             {/* /* {stars.map((star,i:any) => (
                <MyStar 
                key={i}
                shapeProps={star}
                isSelected={selectedId === star.id}
                onSelect={() => {
                  setSelectedId(star.id);
                }}
                onChange={(newAttrs: any) => {
                  const newStar = stars.slice();
                  newStar[i] = newAttrs;
                  setStars(newStar);
                }}
                />
              ))}
              {rectangles.map((rect, i:any) => {
          return (
            <Rectangle
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                setSelectedId(rect.id);
              }}
              onChange={(newAttrs: any) => {
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                setRectangles(rects);
              }}
            />
                );
            })}  */ }
      </Canva>

    </Grid>
  )
}

export default Layout;