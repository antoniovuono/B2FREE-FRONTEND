import React, { useState } from 'react';
import * as Yup from 'yup';
import { BsFillPlusCircleFill } from 'react-icons/bs';

import { Container, Badge, AddRentalSpace, Scroll, Form } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('Insira o nome do espaço'),
    name: Yup.string().required('Insira a porcentagem de comissão'),
});

export default function AddRentalSpaces() {
    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    function handleSubmit() {}

    return (
        <Container>
            <Badge onClick={handleToggleVisible}>
                <BsFillPlusCircleFill size={25} color="FFF" />
            </Badge>

            {visible && (
                <AddRentalSpace>
                    <Scroll>
                        <Form schema={schema} onSubmit={handleSubmit}>
                            <h2>Adicionar Cadeira</h2>
                            <input type="string" placeholder="Nome do espaço" />
                            <input
                                type="string"
                                placeholder="Porcentagem de comissão"
                            />
                            <button type="submit">Adicionar</button>
                        </Form>
                    </Scroll>
                </AddRentalSpace>
            )}
        </Container>
    );
}
