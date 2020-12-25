import './OptionBar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option.js'
import { render } from 'react-dom';

class OptionBar extends React.Component {

    render() {
        const elements = [];
        for (var i = 0; i < this.props.options.length; i++) {
            elements.push(<a href={this.props.links[i]}><Option text={this.props.options[i]}></Option></a>);
        }

        return(
            <div className='option-bar'>
                {elements}
            </div>
        );
    }
}

export default OptionBar;