import React from 'react';
import MenuContent1 from './MenuContent1';
import MenuContent2 from './MenuContent2';
import MenuContent3 from './MenuContent3';


class MenuBody extends React.Component {
    render() {

        return (
            <div className='content_boxes'>
            <div className='menu_container'>
                <MenuContent1/>
                <MenuContent2/>
                <MenuContent3/>
            </div>
        </div>
        )
    }
}


export default MenuBody;