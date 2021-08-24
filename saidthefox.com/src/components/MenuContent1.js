import React from 'react';
import { Link } from "react-router-dom";

function MenuContent1() {
    return (
        <div className='menu_content_boxes'>
            <Link to="/menu">
            <button className='arrows next'
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   var getmenu = list.getElementsByClassName("content_boxes")[2]
                   var menulist = getmenu.getElementsByClassName("menu_container")[0]
                   menulist.getElementsByClassName("menu_content_boxes")[1].scrollIntoView({behavior:"smooth"});
                 }}>
            </button>
            </Link>    
                MenuContent1
            </div>
    )
}

export default MenuContent1;