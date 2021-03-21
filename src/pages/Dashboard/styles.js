import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-items: center;
        align-self: center;

        button {
            border: 0;
            background: none;
        }

        strong {
            color: #fff;
            font-size: 24px;
            margin: 0 15px;
        }
    }

    .form {
        input {
            background: #ffffff;
            border: 0;
            color: #4d4b4b;
            border-radius: 5px;
            height: 30px;
            width: 220px;
            padding: 20px;
            margin-left: 15px;

            &::placeholder {
                color: #c6c7c4;
            }
        }

        button {
            background: blue;
            padding: 10px;
            width: 100px;
            border-radius: 5px;
            margin: 5px;
            margin-left: 13px;
            background: #f1e02c;
            border: none;
            color: #fff;
        }
    }
`;

export const RentalSpaceList = styled.div`
    background: #ededf0;
    width: 570px;
    height: 89px;
    display: flex;
    align-items: center;
    margin: 10px auto;
    border-radius: 5px;

    .circle {
        display: flex;
        align-items: center;
        margin: 45px;
    }

    h3 {
        color: #4d4b4b;
        font-size: 20px;
    }

    h4 {
        color: #b8adad;
        font-size: 12px;
        margin-top: 2px;
    }
`;
