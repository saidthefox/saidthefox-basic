import React from 'react';
import { Link } from "react-router-dom";


class Nav extends React.Component {
   render() {
      return (
         <div id = "site_menu">
           <Link to="/">
              <button class='menubutton'
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   list.getElementsByClassName("content_boxes")[0].scrollIntoView({behavior:"smooth"});
                 }}>
                 Home
              </button>
           </Link>
           <Link to="/location">
              <button class='menubutton'
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   list.getElementsByClassName("content_boxes")[1].scrollIntoView({behavior:"smooth"});
                 }}>
                 Location
              </button>
           </Link>
           <Link to="/menu">
              <button class='menubutton'
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   list.getElementsByClassName("content_boxes")[2].scrollIntoView({behavior:"smooth"});
                 }}>
                 Menu
              </button>
           </Link>
           <Link to="/about">
             <button class='menubutton'
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   list.getElementsByClassName("content_boxes")[3].scrollIntoView({behavior:"smooth"});
                 }}>
                About
             </button>
           </Link>
           <Link to="/contact">
             <button class='menubutton'
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