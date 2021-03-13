import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function SignUp() {
    return (
        <>
            <h1>B2FREE</h1>
            <form>
                <input type="name" placeholder="Nome"></input>
                <input type="number" placeholder="CPF/CNPJ"></input>
                <input type="email" placeholder="E-mail"></input>
                <input type="password" placeholder="Senha"></input>

                <button type="submit">Cadastrar</button>
                <Link to="/">Já é cadastrado ?</Link>
            </form>
        </>
    );
}
