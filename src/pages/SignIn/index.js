import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

export default function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <h1>B2FREE</h1>
            <Form onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Senha" />

                <button type="submit">Acessar</button>
                <Link to="/register">Criar uma conta</Link>
            </Form>
        </>
    );
}
