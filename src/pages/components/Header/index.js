import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import Notifications from '../../components/Notifications';
import { useSelector } from 'react-redux';

export default function Header() {
    const profile = useSelector((state) => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <h3>B2FREE</h3>
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src={
                                profile.avatar.url ||
                                `https://avatars.dicebear.com/api/male/reidabarba.svg`
                            }
                            alt="Rei da barba"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
