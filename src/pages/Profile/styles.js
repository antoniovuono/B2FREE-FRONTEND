import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 400px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 5px;
            height: 35px;
            padding: 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: #fff;
            }
        }

        hr {
            border: 0;
            height: 1px;
            background: #fff;
            margin: 10px 0 20px;
        }

        span {
            color: #fff;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #2ab7ca;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 5px;
            font-size: 16px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.03, '#155C66')};
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }

    > button {
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        background: #f1e02c;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        &:hover {
            background: ${darken(0.08, '#C0B10C')};
        }
    }
`;
