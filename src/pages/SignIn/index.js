import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function SignIn() {
    return (
        <>
            <h1>B2FREE</h1>
            <form>
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />

                <button type="submit">Acessar</button>
                <Link to="/register">Criar uma conta !</Link>
            </form>
        </>
    );
}
