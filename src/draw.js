const canvas = new Canvas('my-canvas', 500, 500);
const mouse = new Pointer();

let squares = [];

canvas.on('draw', function (ctx, handyObject) {

  ctx.clear();

  squares.forEach(function (square) {

    ctx.fillRect(square.x, square.y, square.w, square.h);

  });

  if( mouse.isDown( mouse.BTN_LEFT ) ) {

    const relative_start = mouse.relative( canvas.element, mouse.mousedown[mouse.BTN_LEFT].x, mouse.mousedown[mouse.BTN_LEFT].y );
    const relative_current = mouse.relative( canvas.element, mouse.x, mouse.y );

    const width = ( relative_current.x - relative_start.x );
    const height = ( relative_current.y - relative_start.y );

    ctx.fillRect( relative_start.x, relative_start.y, width, height );

  }

}).start();

mouse.on('up', function (event) {

  if(event.button == mouse.BTN_LEFT) {

    const entry = mouse.getLastClick(mouse.BTN_LEFT);

    const relative = mouse.relative( canvas.element, entry.x, entry.y );
    const endrelative = mouse.relative( canvas.element, entry.endx, entry.endy );

    const square = {

      x: Math.min( relative.x, endrelative.x ),
      y: Math.min( relative.y, endrelative.y ),
      w: Math.max( ( relative.x - endrelative.x ) , ( endrelative.x - relative.x ) ),
      h: Math.max( ( relative.y - endrelative.y ) , ( endrelative.y - relative.y ) )

    };

    squares.push( square );

  }

});


  //  if(stageRef.current !== null){
  //    const stageCenterX = stageRef.current.getBoundingClientRect().x + stageRef.current.getBoundingClientRect().width / 2;
  //    const stageCenterY = stageRef.current.getBoundingClientRect().y + stageRef.current.getBoundingClientRect().height / 2

  //    console.log(stageCenterX, stageCenterY)
  // }

// useLayoutEffect(() => {
//     const update = () => {
//       if(stageRef.current !== null){
  
//       const height = stageRef.current.getBoundingClientRect().height
//       const width = stageRef.current.getBoundingClientRect().width
  
//       const centerX = stageRef.current.getBoundingClientRect().width / 2;
//       const centerY = stageRef.current.getBoundingClientRect().height / 2;
//       setCenterStage({centerX, centerY})
//       setStageSize({width, height});
  
//     }
//   }
//     window.addEventListener("resize", update);
//     return () => {
//       window.removeEventListener("resize", update);
//     };

// }, [stageSize,centerStage])

  // const handleDragStart = (e:any) => {
  //   const id = e.target.id();
  //   setStars(
  //     stars.map((star) => {
  //       return {
  //         ...star,
  //         isDragging: star.id === id,
  //       };
  //     })
  //   );
  // };
  // const handleDragEnd = (e:any) => {
  //   setStars(
  //     stars.map((star) => {
  //       return {
  //         ...star,
  //         isDragging: false,
  //       };
  //     })
  //   );
  // };
