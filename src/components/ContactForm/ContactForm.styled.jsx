import styled from 'styled-components';

export const Form = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    width: 300px;
    margin-bottom: 10px;
`
export const Button = styled.button`
    padding: 10px;
    background-color: #b6b7b8;
    border: none;
    border-radius: 4px;

    &:hover, &:focus {
        background-color: #d4d5d6;
    }
`
