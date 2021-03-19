import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

// import { Container } from './styles';

export default function Profile() {
    return (
        <Container>
            <Form>
                <h1>Olá</h1>
                <Input name="name" placeholder="Nome completo" />
                <Input name="cpf" placeholder="Seu CPF" />
                <hr />
            </Form>
        </Container>
    );
}
