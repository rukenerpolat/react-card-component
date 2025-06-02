import React from 'react'
import profilePic from './assets/profile-picture.jpg'


export const Card = () => {
  return (
    <div className='card'>
      <img className='card-image' src={profilePic} alt="profile-picture" />
      <h2 className='card-title'>Card Title</h2>
      <p className='card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, voluptatem modi dolorum repellat aliquid nihil, eos magni temporibus quisquam velit ipsum, quas ipsam!</p>
    </div>
  )
}

export default Card