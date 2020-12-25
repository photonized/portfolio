import React from 'react';

import './Option.css'

class Option extends React.Component {

    render() {
        return(
            <div className='button'>{this.props.text}</div>
        );
    }
}

export default Option;