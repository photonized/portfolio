import './OptionBar.css';
import React from 'react';
import Option from './Option.js'

class OptionBar extends React.Component {

    render() {
        const elements = [];
        for (var i = 0; i < this.props.options.length; i++) {
            elements.push(<Option text={this.props.options[i]}></Option>);
        }

        return(
            <div className='option-bar'>
                {elements}
            </div>
        );
    }
}

export default OptionBar;