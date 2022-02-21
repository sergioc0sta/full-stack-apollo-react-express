import styled from '@emotion/styled';

export const DivStyle = styled.div`
    font-family: arial, sans-serif;
    border-collapse: collapse;

    display: block;
    overflow: auto;
    height: 35rem;
    width: 50%;

    flex-direction: column;
    border: 3px solid blue;
    max-height: 100%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const TableStyle = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;

    & > td,
    th,
    td {
        background-color: #dddddd;
        text-align: left;
        padding: 1rem;
    }
`;
