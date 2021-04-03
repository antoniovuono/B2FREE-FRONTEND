/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { BsFillCircleFill, BsFillTrashFill } from 'react-icons/bs';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';
import { Container, RentalSpaceList } from './styles';

// import { Container } from './styles';

export default function Dashboard() {
    const [rentalspace, setRentalSpaces] = useState([]);

    useEffect(() => {
        async function loadRentalSpaces() {
            const response = await api.get('rentalspace');

            setRentalSpaces(response.data);
        }

        loadRentalSpaces();
    }, []);

    async function handleSubmit(data) {
        try {
            await api.post('rentalspace', data);
            toast.success('Espaço cadastrado com sucesso !');
            window.location.reload(false);
        } catch (err) {
            toast.error(
                'Não foi possível realizar o cadastro do espaço, verifique seus dados'
            );
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleDelete = useCallback(async (data) => {
        const gonnaDelete = window.confirm(
            `Tem certeza que deseja deletar a ${data.name}?`
        );

        if (!gonnaDelete) return;

        await api.delete(`rentalspace/${data.id}`);
        toast.info(` ${data.name} foi excluída com sucesso!`);
        history.push('/dashboard');
        window.location.reload(false);
    });

    return (
        <Container>
            <header>
                <button type="button">
                    <MdChevronLeft size={36} color="FFF" />
                </button>
                <strong>20 de Março</strong>
                <button type="button">
                    <MdChevronRight size={36} color="FFF " />
                </button>
            </header>

            <Form
                class="form"
                initialData={rentalspace || undefined}
                onSubmit={handleSubmit}
            >
                <div>
                    <Input
                        name="name"
                        id="name"
                        type="name"
                        placeholder="Nome do espaço"
                    />
                    <Input
                        name="percentage"
                        id="percentage"
                        type="percentage"
                        placeholder="Porcentagem de parceria"
                    />
                    <button type="submit">Adicionar</button>
                </div>
            </Form>

            <ul className="RentalSpaceList">
                {rentalspace.map((rental_space) => (
                    <li key={rental_space._id}>
                        <RentalSpaceList>
                            <div>
                                <BsFillCircleFill
                                    class="circle"
                                    size={19}
                                    color="#05FF00"
                                />
                            </div>

                            <div>
                                <h3>{rental_space.name}</h3>
                                <h4>{rental_space.percentage}</h4>
                            </div>

                            <div className="delete">
                                <button
                                    type="button"
                                    onClick={() => handleDelete(rental_space)}
                                >
                                    <BsFillTrashFill
                                        size={35}
                                        color="#242424"
                                    />
                                </button>
                            </div>
                        </RentalSpaceList>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
