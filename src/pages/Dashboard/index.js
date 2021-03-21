import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { BsFillCircleFill } from 'react-icons/bs';
import api from '../../services/api';
import AddRentalSpace from '../../pages/components/addRentalSpace';
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
                <AddRentalSpace />
            </header>

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
