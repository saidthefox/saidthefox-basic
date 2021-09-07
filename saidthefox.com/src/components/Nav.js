import React from 'react';
import { Link } from "react-router-dom";


class Nav extends React.Component {
   render() {
      return (
         <div id = "site_menu">
           <Link to="/" name="Home">
              <button class='menubutton' name="Home"
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   list.getElementsByClassName("content_boxes")[0].scrollIntoView({behavior:"smooth"});
                 }}>
                 Home
              </button>
           </Link>
           <Link to="/location" name="Location">
              <button class='menubutton' name="Location"
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   list.getElementsByClassName("content_boxes")[1].scrollIntoView({behavior:"smooth"});
                 }}>
                 Location
              </button>
           </Link>
           <Link to="/menu" name="Menu">
              <button class='menubutton' name="Menu"
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   list.getElementsByClassName("content_boxes")[2].scrollIntoView({behavior:"smooth"});
                 }}>
                 Menu
              </button>
           </Link>
           <Link to="/about" name="About">
             <button class='menubutton' name="About"
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   list.getElementsByClassName("content_boxes")[3].scrollIntoView({behavior:"smooth"});
                 }}>
                About
             </button>
           </Link>
           <Link to="/contact" name="Contact">
             <button class='menubutton' name="Contact"
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   list.getElementsByClassName("content_boxes")[4].scrollIntoView({behavior:"smooth"});
                 }}>
                Contact
             </button>
           </Link>
          </div>
         )
   }
}

export default Nav;