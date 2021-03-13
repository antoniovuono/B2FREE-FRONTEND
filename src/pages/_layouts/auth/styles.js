import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: #ededf0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    h1 {
        color: #fe4a49;
        font-size: 55px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: #ffffff;
            border: 0;
            color: black;
            border-radius: 5px;
            height: 50px;
            padding: 15px;
            margin: 0 0 10px;

            &::placeholder {
                color: #fe4a49;
            }
        }

        button {
            margin: 5px 0 0;
            height: 50px;
            background: #fe4a49;
            font-weight: normal;
            color: #fff;
            border: 0;
            border-radius: 5px;
            font-size: 25px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#D7816A')};
            }
        }
        a {
            color: #fe4a49;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;
            &:hover {
                opacity: 1;
            }
        }
    }
`;
