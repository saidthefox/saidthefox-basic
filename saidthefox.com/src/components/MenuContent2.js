import React from 'react';

function MenuContent2() {
    return (
        <div className='menu_content_boxes'>
            <button className='arrows next'
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   var getmenu = list.getElementsByClassName("content_boxes")[2]
                   var menulist = getmenu.getElementsByClassName("menu_container")[0]
                   menulist.getElementsByClassName("menu_content_boxes")[2].scrollIntoView({behavior:"smooth"});
                 }}>
            </button>
                MenuContent2
            <button className='arrows prev'
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   var getmenu = list.getElementsByClassName("content_boxes")[2]
                   var menulist = getmenu.getElementsByClassName("menu_container")[0]
                   menulist.getElementsByClassName("menu_content_boxes")[0].scrollIntoView({behavior:"smooth"});
                 }}>
            </button>
            </div>
    )
}

export default MenuContent2;