import React from 'react';
import './SocialBar.css'
import Social from './Social';

const github = 'https://raw.githubusercontent.com/photonized/photonized.github.com/d1f569627a12fbd4f1f3eb8156f02b394634e055/img/github.svg';
const instagram = 'https://raw.githubusercontent.com/photonized/photonized.github.com/d1f569627a12fbd4f1f3eb8156f02b394634e055/img/instagram.svg'
const twitter = 'https://raw.githubusercontent.com/photonized/photonized.github.com/d1f569627a12fbd4f1f3eb8156f02b394634e055/img/twitter.svg';
const linkedin = 'https://raw.githubusercontent.com/photonized/photonized.github.com/d1f569627a12fbd4f1f3eb8156f02b394634e055/img/linkedin.svg';

class SocialBar extends React.Component {
    render() {
        return(
            <div className='soc-bar'>
                <Social link='https://instagr.am/communism' img={instagram}></Social>
                <Social link='https://twitter.com/vladjdk' img={twitter}></Social>
                <Social link='https://linkedin.com/in/vladjdk' img={linkedin}></Social>
                <Social link='https://github.com/photonized' img={github}></Social>
            </div>
        );
    }
}

export default SocialBar;