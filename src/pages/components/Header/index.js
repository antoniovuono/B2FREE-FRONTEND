import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <h3>B2FREE</h3>
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>Rei da Barba</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src="https://avatars.dicebear.com/api/male/reidabarba.svg"
                            alt="O rei da barba"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
