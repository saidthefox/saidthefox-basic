import React, { Component } from 'react';
import { ReactComponent as Logo } from '../logo.svg';

class HomeBody extends Component {
    render(){
        return (
            <div className = "content_boxes">
                home<Logo/>

            </div>
    )
}
}
export default HomeBody;