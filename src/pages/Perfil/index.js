import React from 'react'
import {Link} from 'react-router-dom'
import {FiSettings, FiMessageSquare, FiLogOut, FiMail} from 'react-icons/fi'
import logo from '../../assets/logo.png'
import './styles.css'


export default function Perfil(){
    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName')
    const userEmail = localStorage.getItem('userEmail')
    
    return(
        <div className="perfilContainer">
            <header>
                <div className="userName">
                    <img src={logo} alt="Connecting Women" />
                    <p>Bem vinda, <strong>{userName}</strong></p>
                </div>
                <div className="userSettings">
                    <ul>
                        <li><FiMail size={25} title="Mensagens" /></li>
                        <li><FiMessageSquare size={25} title="Chat" /></li>
                        <li><FiSettings size={25} title="Configurações" /></li>
                        <li><FiLogOut size={25} title="Sair" /></li>
                    </ul>
                </div>
            </header>
            <main>
                <div className="userData">
                    <ul>
                        <li>
                            <h1><strong>{userName}</strong></h1>
                            <p><strong>ID:</strong> {userId}</p>
                            <p><strong>E-mail:</strong> {userEmail}</p>
                            <p><strong>Serviço oferecido:</strong></p>
                            <p><strong>Dias de atendimento:</strong></p>
                            <p><strong>Cidade:</strong></p>
                            <p><strong>Estado:</strong></p>
                        </li>
                    </ul>
                </div>
                <div className="more">
                <button className="deleteAccount">EDITAR CADASTRO</button>
                <button className="deleteAccount">SAIR</button>
                <button className="perfilBtn">EXCLUIR CONTA</button>
                </div>
            </main>
        </div>
    )
}