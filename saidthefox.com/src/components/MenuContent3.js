import React from 'react';

function MenuContent3() {
    return (
        <div className='menu_content_boxes'>
                MenuContent3
            <button className='arrows prev'
                onClick={function(){
                    var list = document.getElementsByClassName("container")[0];
                    var getmenu = list.getElementsByClassName("content_boxes")[2]
                    var menulist = getmenu.getElementsByClassName("menu_container")[0]
                    menulist.getElementsByClassName("menu_content_boxes")[1].scrollIntoView({behavior:"smooth"});
                }}>
            </button>
        </div>
    )
}

export default MenuContent3;