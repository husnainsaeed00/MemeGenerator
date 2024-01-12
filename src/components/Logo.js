

import TrolFace from './images/Troll Face.png';

// ...

export default function Logo() {
    return (
      <header>
        <div className="logo">
        <img src={TrolFace} alt="World" className="logo-icon" />
        <p className='logo-name'> Meme Generator</p>
        </div>
        <div className='project'>React-Project</div>
      </header>
    );
  }