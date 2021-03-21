import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Form } from '@rocketseat/unform';
import { BsFillCircleFill } from 'react-icons/bs';
import api from '../../services/api';
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
    });

    async function handleSubmit(data) {
        const establishment_id = localStorage.getItem('users');

        await api.post('/rentalspace', data, {
            headers: {
                establishment_id,
            },
        });

        history.pushState('/rentalspace');
    }

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

            <Form class="form" onSubmit={handleSubmit}>
                <div>
                    <input id="name" type="name" placeholder="Nome do espaço" />
                    <input
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
                        </RentalSpaceList>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
