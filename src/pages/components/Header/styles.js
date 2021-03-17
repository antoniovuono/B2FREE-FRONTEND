import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 70px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        h3 {
            font-size: 26px;
            color: #fe4a49;
            letter-spacing: -2px;
            margin-right: 20px;
            padding-right: 20px;
            border-right: 2px solid #fe4a49;
        }

        a {
            font-weight: bold;
            color: #4d4b4b;
            font-size: 12px;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #fe4a49;

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #4d4b4b;
        }

        a {
            display: block;
            margin-top: block;
            color: #fe4a49;
        }
    }

    img {
        height: 35px;
        border-radius: 50%;
    }
`;
