import React from 'react';
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from "../../assets/logo.svg"

import "./styles.css"

export default function NewIncident() {
    return (
        <div className="newinsident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para home
                </Link>
                </section>
                <form>
                    <input placeholder="Titulo do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
}
