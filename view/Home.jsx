import React from 'react';
import {Menu, Input, Button, Icon } from 'semantic-ui-react';
import Navbar from '../components/navbar.jsx';
import Carousel from '../components/carousel.jsx';
class Home extends React.Component {
   constructor(){
       super();
   }
   render() {
      return (
         <div>
          <Navbar/>
          <Carousel/>
         </div>
         
      );
   }
}
export default Home;
