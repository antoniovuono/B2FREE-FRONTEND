import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import AvatarInput from './AvatarInput';

import { updateProfileRequest } from '../../store/modules/user/actions';

// import { Container } from './styles';

export default function Profile() {
    const profile = useSelector((state) => state.user.profile);
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />

                <Input name="name" placeholder="Nome completo" />
                <Input name="cpf" placeholder="Seu CPF" />
                <Input type="email" name="email" placeholder="Seu email" />
                <hr />
                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Digite sua nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="submit">Sair</button>
        </Container>
    );
}
