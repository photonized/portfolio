import './Social.css'
import React from 'react';

class Social extends React.Component {

    render(){
        return (
            <a href={this.props.link}><div className='circle' style={{backgroundImage: `url(${this.props.img})`}}></div></a>
        ); 
    }
}

export default Social;