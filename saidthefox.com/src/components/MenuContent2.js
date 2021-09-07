import React from 'react';

class MenuContent2 extends React.Component {
    render () {
        return (
            <div className='menu_content_boxes'>
            <button class='arrows next' title="More"
                onClick={function(){
                   var list = document.getElementsByClassName("container")[0];
                   var getmenu = list.getElementsByClassName("content_boxes")[2]
                   var menulist = getmenu.getElementsByClassName("menu_container")[0]
                   menulist.getElementsByClassName("menu_content_boxes")[2].scrollIntoView({behavior:"smooth"});
                 }}>
            </button>
                MenuContent2
            <button class='arrows prev' title="Back"
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
}

export default MenuContent2;