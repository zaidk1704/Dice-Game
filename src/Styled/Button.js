import styled from 'styled-components'

export const Button = styled.button`
    width: 220px;
    padding: 10px 18px;
    color: white;
    border-radius: 5px;
    background: #000;
    border: none;
    font-size: 16px;
    border: 2px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 2px solid ;
        color: black;
        transition: 0.4s background ease-in;
    }
`;

export const OutLineButton = styled(Button)`
    background-color: white;
    border: 2px solid black;
    color: black;
    &:hover{
        background-color: black;
        border: 2px solid transparent;
        color: white;
        transition: 0.4s background ease-in;
    }
`;