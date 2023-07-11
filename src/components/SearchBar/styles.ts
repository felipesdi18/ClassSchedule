import styled from "styled-components";

export const Container = styled.div`

background-color: white;
max-width: 350px;
margin: 30px auto 0px;
display: flex;
border-radius: 8px;
overflow: hidden;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);

button{
    background-color: #4BA3F4;
    width: 48px;
    height: 48px;
    border:none;
    &:hover{
        background-color: #2792f1;
    }
    transition: 300ms;
}

input{
    height: 48px;
    flex: 1;
    padding: 0px 13px;
    border: none;
    &:focus{
        outline:none
    }
}
`