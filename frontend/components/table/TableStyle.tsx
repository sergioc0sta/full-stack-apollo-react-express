import styled from '@emotion/styled';

const TableStyle = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border: 3px solid blue;

  & > td,
  th,
  td {
    background-color: #dddddd;
    text-align: left;
    padding: 2.4rem;
  }
`;

export default TableStyle;
