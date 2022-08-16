import styled from "styled-components";
import { FlexBox } from "../../GlobelStyle";


export const StyledSignUp = styled.div`

margin:130px 0;
p{
    margin-top:20px;
    font-size: 20px;
}

`

export const StyledInput = styled(FlexBox)`

        height:1.5rem;
        width:100%;
        justify-content:center;
        align-items: center;
        margin-top: 60px;

input{
    outline: none;
    border-bottom: 1px solid gray;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 10px 0;
    text-indent: 8px;
    width: 70%;
    &::placeholder{
    font-size: 18px;
    font-weight: 600;
}
}

h3{
    letter-spacing: 0.04em;
    font-size:1rem;
    color: #000F08; 
    cursor: pointer;  
    padding: 9px 0;
    border-bottom: 1px solid gray; 
}

`
