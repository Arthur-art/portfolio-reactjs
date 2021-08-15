import React from "react";
import style from "./styles.module.scss"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaUniversity, FaInstagram, FaRocket } from "react-icons/fa"

export function Header() {

    return (
        <header className={style.headerContainer}>

            <button><a href="#"><AiFillGithub size={30} /></a></button>
            <button> <a href="#"><AiFillLinkedin size={30} /></a></button>
            <button> <a href="#"><FaUniversity size={30} /></a></button>
            <button><a href="#"><FaInstagram size={30} /></a></button>
            <button> <a href="#"><FaRocket size={30} /></a></button>

        </header>
    )
}