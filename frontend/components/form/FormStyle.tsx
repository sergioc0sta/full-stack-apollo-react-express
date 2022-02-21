import styled from '@emotion/styled';

export const FormStyle = styled.div`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    flex-direction: column;
    width: 50%;
    min-height: 100%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const DataPersonStyle = styled.div`
    flex: 1;
    order: 1;
    margin-right: 2em;
    justify-content: flex-end;
`;

export const InputStyle = styled.div`
    padding: 1.5rem 0rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & > label {
        width: 40%;
        font-size: 1.5rem;
        color: blue;
    }

    & > input,
    select {
        width: 60%;
        font-size: 1rem;
        border: 0.1rem solid blue;
        color: blue;
        background: white;
    }
`;

export const Buttonstyle = styled.div`
    display: flex;
    justify-content: flex-end;
    & > button {
        padding: 1rem;
        font-size: 1.5rem;
        color: blue;
    }
`;

export const FooterStyle = styled.div`
    display: flex;    
    padding: 2rem;
    width: 80%
    justify-content: center;
   
    & > div {
        background: darkseagreen;
        border-radius:0.5rem;
        width: 100%;
        padding:1rem;
    }
`;
