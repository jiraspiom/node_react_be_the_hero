import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css';

import heroiImage from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    return (
        <div className="logo-container">
            <section className="form">
                <img src={logoImg} alt="Be the heroi" />

                <form>
                    <h1>Faca seu logon</h1>
                    <input placeholder="Sua id" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroiImage} alt="Herois" />
        </div>

    );
}