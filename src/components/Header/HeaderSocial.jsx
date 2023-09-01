import React from 'react'

import {BsLinkedin  } from 'react-icons/bs'
import {BsGithub  } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ali-muarif-4109b3214/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/alimuarif" target='_blank' rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial