import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import './styles.css'
import api from '../../services/api'

import logo from '../../assets/logo.png'

export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pass2, setPass2] = useState('')

    const history = useHistory()

    async function userRegister(e){
        e.preventDefault()

        if(password !== pass2){
            alert('As senhas não conferem. Tente novamente.')
        }
         
        const data = {
            name,
            email,
            password,
        }

       
       try{ const response = await api.post('users', data)

        alert(response.data.ok)

        history.push('/')
        }catch{
            alert('E-mail já cadastrado.')
         }
       
    }

    return(
        <div className="container">
            <section>
                <div className="logoBox">
                    <img src={logo} alt="Connection Women" />
                    <Link to="/">VOLTAR</Link>
                </div>
                <div className="formBox">
                    <form onSubmit={userRegister}>
                        <p>Informe seu nome completo:</p>
                        <input type="text" name="name" placeholder="Nome completo" required autoFocus
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                        <p>Informe um e-mail válido:</p>
                        <input type="email" name="email" placeholder="E-mail" required 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <p>A senha deverá ter no mínimo 8 digitos</p>
                        <input type="password" name="password" placeholder="Cadastre uma senha" minLength="8"  required 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <p>Informe a senha novamente para verificação</p>
                        <input type="password" placeholder="Verificação de senha" minLength="8" required 
                        value={pass2}
                        onChange={e => setPass2(e.target.value)}
                        />
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>
            </section>
        </div>
    )
}