import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email válido!')
        .required('É necessário ter um email para logar...'),
    password: Yup.string().required('É necessário ter uma senha para logar'),
});

export default function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <h1>B2FREE</h1>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Senha" />

                <button type="submit">Acessar</button>
                <Link to="/register">Criar uma conta</Link>
            </Form>
        </>
    );
}
