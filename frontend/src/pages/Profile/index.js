import React, { Profiler } from 'react';
import { Link } from "react-router-dom";
import { TiPower, TiTrash} from "react-icons/ti"

import "./styles.css"

import logoimg from "../../assets/logo.svg"


export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoimg} alt="Be the Hero"/>
                <span>Bem vindo, a Apps</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso </Link>

                <button type="button">
                    < TiPower  size={18} color= "#e04021"/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Descicao teste</p>

                    <strong>DESCRICAO:</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p> RS 120,00</p>

                    <button type="button"> 
                        < TiTrash size={20} color= "#a8a8b3"/>
                    </button>

                </li>
            </ul>
        </div>
    )
}