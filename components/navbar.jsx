import React from 'react';
import {Menu, Input, Button, Icon } from 'semantic-ui-react';
class navbar extends React.Component {
   constructor(){
       super();
   }
   render() {
      return (
       
         <Menu  style={{backgroundColor:'#051B36', marginTop:'-1%',width:'100%',height:'100px'}}>
            <div className="ui three item menu" style={{color:'white',marginTop:'1%'}}>
            <a className="active item " style={{float:'right',marginTop:'70px',marginRight:'10px'}}>About us</a>
            <a className="item" style={{float:'right',marginTop:'70px',marginRight:'20px'}}>Contact</a>
            <a className="item" style={{float:'right',marginTop:'70px',marginRight:'20px'}}>Home</a>
            </div>
         </Menu>
         
      );
   }
}
export default navbar;
