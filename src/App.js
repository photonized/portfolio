import './App.css';
import OptionBar from './OptionBar.js';
import React from 'react';
import SocialBar from './SocialBar.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <header className="App-header-col">
          <div className='main-col'>
            <div className='main-text-top-row'>
              <div className='hey'>
                Hey,
              </div>
              <div className='spacer'></div>
            </div>
            <div className='main-text-bottom-row'>
              <div className='spacer'></div>
              <div className='vlad'>
                I'm Vlad!
              </div>
            </div>
          </div>
          <OptionBar className='option-bar' options={['Introduction', 'Experience', 'Projects', 'Skills', 'Contact Me']} links={['/experience','/experience','/experience','/experience','/experience']}></OptionBar>

        </header>
        <SocialBar className='social'></SocialBar>

      </div>
    );
  }
}

export default App;
