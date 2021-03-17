import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório...'),
    cpf: Yup.string('Insira apenas os números !').required(
        'O cpf é obrigatório...'
    ),
    email: Yup.string()
        .email('Insira um email válido')
        .required('O email é obrigatório...'),
    password: Yup.string()
        .min(6, 'A senha precisa de ter 6 caracteres no mínimo')
        .required('A Senha é obrigatória'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, cpf, email, password }) {
        dispatch(signUpRequest(name, cpf, email, password));
    }

    return (
        <>
            <h1>B2FREE</h1>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="name" placeholder="Nome" />
                <Input name="cpf" type="number" placeholder="CPF/CNPJ" />
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Senha" />

                <button type="submit">Cadastrar</button>
                <Link to="/">Já é cadastrado ?</Link>
            </Form>
        </>
    );
}
