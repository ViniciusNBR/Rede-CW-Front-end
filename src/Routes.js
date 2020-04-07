import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Perfil from './pages/Perfil'
import Logon from './pages/Logon'
import Register from './pages/Register'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/Perfil" component={Perfil} />
                <Route path="/Register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}