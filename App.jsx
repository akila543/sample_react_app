import React from 'react';
import {Menu, Input, Button, Icon } from 'semantic-ui-react';
// import navbar from '../components/navbar.jsx';
import Home from './view/Home.jsx';
class App extends React.Component {
   constructor(){
       super();
   }
   render() {
      return (
       
        
         <div>
            <Home/>
         </div>
         
      );
   }
}
export default App;
