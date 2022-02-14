import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import FormStyle from './FormStyle';
import { useMutation } from '@apollo/client';
import createUser from './querie/getUsers';

const DataPersonStyle = styled.div`
    flex: 1;
    order: 1;
    margin-right: 2em;
    & > input,
    select {
        width: 100%;
    }
`;

const Form = () => {
    const [inputs, setInputs] = useState({});
    const refOfForm = useRef<HTMLFormElement>(null);
    const [addTodo] = useMutation(createUser);

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    const handlerSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        alert(JSON.stringify(inputs));
        addTodo({
            variables: {
                name: inputs.name,
                surName: inputs.sname,
                country: inputs.country,
                birthday: inputs.birthdaytime,
            },
        });
        refOfForm?.current?.reset();
    };
    return (
        <FormStyle>
            <form id="form" onSubmit={handlerSubmit} ref={refOfForm}>
                <DataPersonStyle>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={handleChange} />
                    <label>Surame:</label>
                    <input type="text" name="sname" onChange={handleChange} />
                    <label>Country:</label>
                    <select name="country" onChange={handleChange}>
                        <option value="Portugal">Portugal</option>
                        <option value="Franca">Franca</option>
                        <option value="Espanha">Espanha</option>
                        <option value="Malta">Malta</option>
                    </select>
                    <label>Birthday:</label>
                    <input type="date" id="birthdaytime" name="birthdaytime" onChange={handleChange} />
                    <button type="submit" value="reset">
                        Guardar
                    </button>
                </DataPersonStyle>
            </form>
        </FormStyle>
    );
};

export default Form;
