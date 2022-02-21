import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import FormStyle from './FormStyle';
import { useMutation } from '@apollo/client';
import createUser from './querie/getUsers';
import { useTranslation } from 'next-i18next';

const DataPersonStyle = styled.div`
    flex: 1;
    order: 1;
    margin-right: 2em;
    justify-content: flex-end;
`;

const InputStyle = styled.div`
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

const Buttonstyle = styled.div`
    display: flex;
    justify-content: flex-end;
    & > button {
        padding: 1rem;
        font-size: 1.5rem;
        color: blue;
    }
`;

const FooterStyle = styled.div`
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
const Form = () => {
    const [inputs, setInputs] = useState({ name: null, sname: null, country: null, birthdaytime: null });
    const refOfForm = useRef<HTMLFormElement>(null);
    const [addTodo, { data, error }] = useMutation(createUser);
    const { t } = useTranslation();

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
                    <InputStyle>
                        <label>{t('name')}:</label>
                        <input type="text" name="name" onChange={handleChange} required />
                    </InputStyle>
                    <InputStyle>
                        <label>{t('surName')}:</label>
                        <input type="text" name="sname" onChange={handleChange} required />
                    </InputStyle>
                    <InputStyle>
                        <label>{t('countries')}:</label>
                        <select name="country" onChange={handleChange} required>
                            <option value="">{t('select')}</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Franca">Franca</option>
                            <option value="Espanha">Espanha</option>
                            <option value="Malta">Malta</option>
                        </select>
                    </InputStyle>
                    <InputStyle>
                        <label>{t('birthday')}:</label>
                        <input type="date" id="birthdaytime" name="birthdaytime" onChange={handleChange} required />
                    </InputStyle>
                    <Buttonstyle>
                        <button type="submit" value="reset">
                            {t('save')}
                        </button>
                    </Buttonstyle>
                </DataPersonStyle>
            </form>
            {data && error === undefined ? (
                <FooterStyle>
                    <div>
                        cenas ajksndkajsd akjs dkaj sdkj akjs dkja skjd kaj sdkja sjd akjs dkja sdk akjs dja sjdk akjsd
                        akjs dkaj sdkja sdkaj ksd a
                    </div>
                </FooterStyle>
            ) : null}
        </FormStyle>
    );
};

export default Form;
