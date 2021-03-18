import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';
import {
    Container,
    Badge,
    NotificationList,
    Notification,
    Scroll,
} from './styles';

export default function Notifications() {
    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible}>
                <MdNotifications color="#fe4a49" size={20} />
            </Badge>

            {visible && (
                <NotificationList>
                    <Scroll>
                        <Notification unread>
                            <p>Você possui uma nova reserva de cadeira !</p>
                            <time>há 2 dias</time>
                            <button type="button">Marcar como lida</button>
                        </Notification>
                        <Notification unread>
                            <p>Você possui uma nova reserva de cadeira !</p>
                            <time>há 2 dias</time>
                            <button type="button">Marcar como lida</button>
                        </Notification>
                        <Notification unread>
                            <p>Você possui uma nova reserva de cadeira !</p>
                            <time>há 2 dias</time>
                            <button type="button">Marcar como lida</button>
                        </Notification>
                    </Scroll>
                </NotificationList>
            )}
        </Container>
    );
}
