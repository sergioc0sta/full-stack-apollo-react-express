import React, { useRef, useState } from 'react';
import { FormStyle, DataPersonStyle, InputStyle, Buttonstyle, FooterStyle } from './FormStyle';
import { useQuery, useMutation } from '@apollo/client';
import createUser from './querie/getUsers';
import { useTranslation } from 'next-i18next';
import getAllUsers from '../table/queries/getAllUsers';
import { convertDate } from './utils/convertDate';

const Form = () => {
    const [inputs, setInputs] = useState({ name: null, sname: null, country: null, birthdaytime: null });
    const refOfForm = useRef<HTMLFormElement>(null);
    const [addTodo, { data, error }] = useMutation(createUser);
    const { refetch } = useQuery(getAllUsers);
    const { t } = useTranslation();

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    const handlerSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        addTodo({
            variables: {
                name: inputs.name,
                surName: inputs.sname,
                country: inputs.country,
                birthday: inputs.birthdaytime,
            },
        });
        refetch();
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
                        {t('hello')}
                        {` ${inputs.name} `} {t('from')} {` ${inputs.country} `} {t('on')}{' '}
                        {` ${convertDate('day', inputs.birthdaytime)} `}
                        {t('of')} {` ${convertDate('month', inputs.birthdaytime)} `} {t('youWillHave')}{' '}
                        {` ${convertDate('year', inputs.birthdaytime)} `}
                    </div>
                </FooterStyle>
            ) : null}
        </FormStyle>
    );
};

export default Form;
