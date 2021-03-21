import styled from 'styled-components';

import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
    position: relative;
`;

export const Badge = styled.button`
    border: 0;
    position: relative;
    ${(props) =>
        props.hasUnread &&
        css`
            &::after {
                position: absolute;
                right: 0;
                top: 0;
                width: 8px;
                height: 8px;
                background: #f1e02c;
                content: '';
                border-radius: 50%;
            }
        `}
`;

export const AddRentalSpace = styled.div`
    position: absolute;
    width: 260px;
    left: calc(50% - 130px);
    top: calc(100% + 30px);
    background: #2ab7ca;
    border-radius: 4px;
    padding: 15px 5px;
    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 20px);
        top: -20px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid #2ab7ca;
    }
`;

export const Scroll = styled(PerfectScrollbar)`
    max-height: 260px;
    padding: 5px 15px;
`;

export const Form = styled.div`
    h2 {
        font-size: 17px;
        text-align: center;
        padding: 10px;
        color: rgba(0, 0, 0, 0.6);
    }

    input {
        background: #fff;
        border: none;
        display: flex;
        height: 30px;
        border-radius: 5px;
        width: 220px;
        align-content: center;
        padding: 15px;
        margin: 0 0 10px;

        &::placeholder {
            color: rgba(0, 0, 0, 0.6);
        }
    }

    button {
        width: 220px;
        color: #4d4b4b;
        font-weight: bold;
    }
`;
