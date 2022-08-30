import React from 'react'
import style from './styles.module.scss'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaUniversity, FaInstagram } from 'react-icons/fa'
import { ImRocket } from 'react-icons/im'

export function Header() {
  return (
    <header className={style.headerContainer}>
      <button>
        <a
          target="_blank"
          href="https://github.com/Arthur-art"
          rel="noreferrer"
        >
          <AiFillGithub color={'white'} size={25} />
        </a>
      </button>
      <button>
        {' '}
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1wNmToPgvdmG21I2Tc5fmxG-djWt2Sqmc"
          rel="noreferrer"
        >
          <FaUniversity color="white" size={25} />
        </a>
      </button>
      <button>
        {' '}
        <a
          target="_blank"
          href="https://app.rocketseat.com.br/me/arthur-teixeiraa-08541#"
          rel="noreferrer"
        >
          <ImRocket color="white" size={25} />
        </a>
      </button>
      <button>
        {' '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/arthur-teixeira-santos-silva-167189177/"
          rel="noreferrer"
        >
          <AiFillLinkedin color="white" size={25} />
        </a>
      </button>
      <button>
        <a
          target="_blank"
          href="https://www.instagram.com/arthurteixeira.ss/"
          rel="noreferrer"
        >
          <FaInstagram color="white" size={25} />
        </a>
      </button>
    </header>
  )
}
