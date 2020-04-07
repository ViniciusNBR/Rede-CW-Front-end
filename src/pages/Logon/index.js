import React, {useState} from 'react'
import api from '../../services/api'
import {Link, useHistory} from 'react-router-dom'

import './styles.css'

import logo from '../../assets/logo.png'
import sororidade from '../../assets/sororidade.png'

export default function Logon(){
    
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function logonSistem(e){
        e.preventDefault()

        const data = {
            email,
            password,
        }

        try{
            const response = await api.post('session', data)

            localStorage.setItem('userId', response.data.id)
            localStorage.setItem('userName', response.data.name)
            localStorage.setItem('userEmail', response.data.email)

            history.push('/Perfil')
        }catch{
            alert('Senha ou e-mail errados.')
        }

    }
    
    return(
        <div className="container">
            <header>
                <div className="logo">
                    <img src={logo} alt="Logomarca do Site" />
                </div>
                <div className="logMenu">
                <form onSubmit={logonSistem}>
                    <ul className="logon">
                        <li>
                            <input type="text" placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </li>
                        <li>
                            <input type="password" placeholder="Senha" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                        </li>
                        <li>
                            <button type="submit">LOG-IN</button>
                        </li>
                    </ul>
                    </form>
                    <ul className="register">
                        <li>
                            <Link className="topLink" to="/Forgotpass">ESQUECEU SUA SENHA?</Link>
                        </li>
                        <li>
                            <Link className="topLink" to="/Register">FAZER CADASTRO</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <div className="logBox">
                    <img src={sororidade} alt="Mulheres Unidas" />
                </div>
                <div className="textBox">
                    <h1>Connecting Women</h1>
                    <p>A <strong>Connecting Women</strong> é uma rede social criada para conectar mulheres e seus talentos nos mais diversos ramos de trabalho, fortalecendo-as e construindo pontes solidas entre todas. Cadastre-se grátis e descubra mulheres incriveis hoje mesmo!</p>
                </div>
            </main>
        </div>
    )
}