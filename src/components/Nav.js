import React from 'react';
import kiwi from '../assets/kiwi.png'

export default function Nav() {
  return (
    <div className='nav'>
      <img src={kiwi} height='40px' alt='kiwi logo'/>
      <h3 className='nav--title'>The 10 Great Walks of New Zealand</h3>
    </div>
  )
}