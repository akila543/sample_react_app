import React from 'react';
import SwipeableViews from 'react-swipeable-views';
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

class carousel extends React.Component{
    constructor()
    {
        super();
    }
   render()
   {
       return(
       <SwipeableViews enableMouseEvents>
      <div class='slide1' style={{backgroundColor: "blue"}}>
      <h1 >hello akila</h1>
      </div>
    </SwipeableViews>
      
       );
   }

}
export default carousel;